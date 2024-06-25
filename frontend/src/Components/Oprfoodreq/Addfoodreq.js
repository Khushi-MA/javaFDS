import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Addfoodreq() {
    let navigate = useNavigate();
    const location = useLocation();
    const exportfdsusername = location.state?.exportfdsusername;
    const [fdsUserInfo, setFdsUserInfo] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/getfdsuserbyfdsusername/${exportfdsusername}`)
            .then(response => {
                setFdsUserInfo(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [exportfdsusername]);

    const [foodreq, setFoodreq] = useState({
        fdsuserid: '',
        ngoid: '',
        date_of_req: '',
        date_of_collection: '',
        quantity: '',
        days_perishable: '',
        type_of_food: ''
    });

    const onInputChange = (e) => {
        setFoodreq({ ...foodreq, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            foodreq.fdsuserid = fdsUserInfo.fdsid;

            console.log('fdsuserid:', fdsUserInfo.fdsid);
            console.log('fdsuserid:', fdsUserInfo);
            console.log('fdsuserid:', foodreq);

            const response = await axios.post("http://localhost:8080/postfoodreq", foodreq);
            const foodreqid = response.data; // assuming the response contains the foodreqid
            navigate('/');
        } catch (error) {
            console.error(`Error adding foodreq: ${error}`);
        }
    };

    return (
        <div className='fullbody collectphoto'>
            <div className="login-container" >
                    {/* <pre>{JSON.stringify(foodreq, null, 2)}</pre> */}
                    
                    <form onSubmit={onSubmit} className="login-form" style={{width:'600px'}}>
                    <h2>Welcome, {exportfdsusername}</h2>
                    <h4><strong>Make your food collection request</strong></h4>
                        <div className='form-group'>
                            <label htmlFor='date_of_collection' className='form-label'>Date of Collection</label>
                            <input 
                                type='date' 
                                className='form-control' 
                                id='date_of_collection' 
                                name='date_of_collection' 
                                value={foodreq.date_of_collection} 
                                onChange={onInputChange} 
                                min={new Date().toISOString().split('T')[0]} 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <input 
                                type='number' 
                                className='form-control' 
                                id='quantity' 
                                name='quantity' 
                                value={foodreq.quantity} 
                                onChange={onInputChange} 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='days_perishable' className='form-label'>Days Perishable</label>
                            <input 
                                type='number' 
                                className='form-control' 
                                id='days_perishable' 
                                name='days_perishable' 
                                value={foodreq.days_perishable} 
                                onChange={onInputChange} 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='type_of_food' className='form-label'>Type of Food</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                id='type_of_food' 
                                name='type_of_food' 
                                value={foodreq.type_of_food} 
                                onChange={onInputChange} 
                            />
                        </div>

                        <div className='form-group buttons'>
                        <button type='submit' className='btn btn-primary'>Register</button>
                        <Link to="/" className="btn newuserbtn">Cancel</Link>
                    </div>

                    </form>
                </div>
            </div>
    );
}

export default Addfoodreq;

// Loginfdsuser.js