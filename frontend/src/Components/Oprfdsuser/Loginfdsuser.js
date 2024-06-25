import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

// import '../../App.css'
import '../../../src/Components/Style.css'

export default function Loginfdsuser() {
    let navigate = useNavigate();
    const location = useLocation();
    const exportfdsusername = location.state ? location.state.fdsusername : '';

    const [fdsuser, setFdsuser] = useState({
        fdsname: '',
        fdsusername: '',
        fdspassword: ''
    });

    const { fdsname, fdsusername, fdspassword } = fdsuser;

    const onInputChange = (e) => {
        setFdsuser({ ...fdsuser, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/getfdsuserbyfdsusername/${fdsuser.fdsusername}`);
            const user = response.data; // assuming the response contains the user data
            if (user) {
                if (user.fdspassword === fdsuser.fdspassword) {
                    navigate('/Oprfoodreq/Addfoodreq', { state: { exportfdsusername: fdsusername } });
                } else {
                    alert("Wrong password, login again");
                    navigate('/Oprfdsuser/Loginfdsuser'); // navigate to the Loginfdsuser.js page
                }
            } else {
                alert("Your username is not available, kindly register");
                navigate('/Oprfdsuser/Addfdsuser'); // navigate to the Adduser.js page
            }
        } catch (error) {
            console.error(error);
            alert("Your username is not available, kindly register");
            navigate('/Oprfdsuser/Addfdsuser'); // navigate to the Adduser.js page

            // alert("An error occurred while fetching the user data");
        }
    };

    return (
        <div className='fullbody fdsphoto'>
            <div className="login-container">
                <form onSubmit={onSubmit} className="login-form">
                    <h2 >Login as FDS Member</h2>
                    <div className="form-group">
                        <label htmlFor="fdsusername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="fdsusername" name="fdsusername" value={fdsusername} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fdspassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="fdspassword" name="fdspassword" value={fdspassword} onChange={e => onInputChange(e)} />
                    </div>

                    <div className='form-group buttons'>
                        <button type="submit" className="btn submitbtn">Submit</button>
                        <Link className="btn newuserbtn" to="/Oprfdsuser/Addfdsuser">New? Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}