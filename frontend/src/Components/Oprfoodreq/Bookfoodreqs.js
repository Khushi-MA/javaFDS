import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import '../Style.css'


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
        <div className="fullbody collectphoto">
            <div className="login-container">
                {/* <pre>{JSON.stringify(NgoInfo, null, 2)}</pre> */}
                <form onSubmit={handleButtonClick} className='login-form'>
                <h2>Welcome, {exportngousername}</h2>
                <h4><strong>Food Collection Requests</strong></h4>
                    <table style={{width:'100%', textAlign:'center'}}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Select</th>
                                <th scope="col">Request ID</th>
                                <th scope="col">FDS-ID</th>
                                <th scope="col">Date of request</th>
                                <th scope="col">Date of collection</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Days perishable</th>
                                <th scope="col">Type of food</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodreq.map((req, index) => (
                                <tr key={req.foodreqid}>
                                    <th scope="row">{index + 1}</th>
                                    {/* <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, req.foodreqid)} /></td> */}
                                    <td style={{textAlign:'center', alignItems:'center', alignContent:"center", padding:'0px 20px 30px 0px'}}><input type="checkbox" className="styled-checkbox" id={`checkbox-${req.foodreqid}`} onChange={(e) => handleCheckboxChange(e, req.foodreqid)} />
                                    <label htmlFor={`checkbox-${req.foodreqid}`} className='booklabel'></label></td>
                                    <td>{req.foodreqid}</td>
                                    <td>{req.fdsuserid}</td>
                                    <td>{new Date(req.date_of_req).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                                    <td>{new Date(req.date_of_collection).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                                    <td>{req.quantity}</td>
                                    <td>{req.days_perishable}</td>
                                    <td>{req.type_of_food}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='form-group buttons'>
                    <button type="submit" className='btn btn-primary'>Update selected</button>
                    <Link to="/" className="btn newuserbtn">Home</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
