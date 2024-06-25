import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import '../../App.css'


export default function Loginngo() {

    let navigate = useNavigate();

    const location = useLocation();
    const exportngousername = location.state ? location.state.ngousername : '';

    const [ngo, setNgo] = useState({
        ngousername: '',
        ngoname: '',
        ngopassword: ''
    });

    const { ngousername, ngoname, ngopassword } = ngo;

    const onInputChange = (e) => {
        setNgo({ ...ngo, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/getngobyngousername/${ngo.ngousername}`);
            const user = response.data; // assuming the response contains the user data
            if (user) {
                if (user.ngopassword === ngo.ngopassword) {
                    navigate('/Oprfoodreq/Bookfoodreqs', { state: { exportngousername: ngousername } });
                } else {
                    alert("Wrong password, login again");
                    navigate('/Oprngo/Loginngo'); // navigate to the Loginngo.js page
                }
            } else {
                alert("Your username is not available, kindly register");
                navigate('/Oprngo/Addngo'); // navigate to the Addngo.js page
            }
        } catch (error) {
            console.error(error);
            alert("Your username is not available, kindly register");
            navigate('/Oprngo/Addngo'); // navigate to the Addngo.js page
        }
    };

    return (
        <div className='fullbody ngophoto'>
            <div className='login-container'>
                <form onSubmit={onSubmit} className="login-form">
                    <h2>Register NGO</h2>
                    <div className='form-group'>
                        <label htmlFor="ngousername" className='form-label'>NGO Username</label>
                        <input type="text" className="form-control" name="ngousername" value={ngousername} onChange={(e) => onInputChange(e)} placeholder='enter your username' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="ngopassword" className='form-label'>NGO Password</label>
                        <input type="text" className="form-control" name="ngopassword" value={ngopassword} onChange={(e) => onInputChange(e)} placeholder='enter your NGO Password' />
                    </div>
                    <div className="form-group buttons">
                        <button type="submit" className="btn submitbtn">Submit</button>
                        <Link className="btn newuserbtn" to="/Oprngo/Addngo">New? Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}