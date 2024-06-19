import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Bookfoodreqs() {
    let navigate = useNavigate();
    const location = useLocation();
    const exportngousername = location.state?.exportngousername;
    const [NgoInfo, setNgoInfo] = useState(null);

    const [foodreq, setFoodreq] = useState([]);

    const [selectedFoodreqs, setSelectedFoodreqs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/getngobyngousername/${exportngousername}`)
            .then(response => {
                setNgoInfo(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [exportngousername]);

    useEffect(() => {
        loadFoodreqs();
    }, []);

    const loadFoodreqs = async () => {
        console.log(NgoInfo)
        const result = await axios.get("http://localhost:8080/getfoodreqswithnullngoid");
        // console.log(result);
        setFoodreq(result.data);
    }

    const handleCheckboxChange = (e, foodreqid) => {
        if (e.target.checked) {
            setSelectedFoodreqs([...selectedFoodreqs, foodreqid]);
        } else {
            setSelectedFoodreqs(selectedFoodreqs.filter(id => id !== foodreqid));
        }
    };

    const handleButtonClick = () => {
        selectedFoodreqs.forEach(foodreqid => {
            fetch(`http://localhost:8080/updatefoodreq/${foodreqid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ngoid: NgoInfo.ngoid,
                }),
            });
        });
    };


return (
        <div classNameName="container">
            <div classNameName="py-4">

                <h1>Food Requests</h1>
                <h1 className='text-centre m-4'> Welcome, {exportngousername}</h1>

                <pre>{JSON.stringify(NgoInfo, null, 2)}</pre>

                <form action="" onSubmit={handleButtonClick}>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Request ID</th>
                            <th scope="col">FDS-ID</th>
                            <th scope="col">NGO-ID</th>
                            <th scope="col">Collect?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodreq.map((foodreq, index) => (
                                <tr key={foodreq.foodreqid}>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, foodreq.foodreqid)} /></td>
                                    <td>{foodreq.foodreqid}</td>
                                    <td>{foodreq.fdsuserid}</td>
                                    <td>{foodreq.ngoid}</td>
                                    {/* other columns */}
                                </tr>
                            ))
                            // foodreq.map((foodreq, index) => (
                            //     <tr>
                            //         <th scope="row" key={index}>{index + 1}</th>
                            //         <td>{foodreq.foodreqid}</td>
                            //         <td>{foodreq.fdsuserid}</td>
                            //         <td>{foodreq.ngoid}</td>
                            //     </tr>
                            // ))
                        }

                    </tbody>
                </table>
                <button type='submit' className='btn btn-outline-primary' onClick={handleButtonClick}>Update selected</button>
                </form>


            </div>
        </div>
    );
}
