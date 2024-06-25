import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';


import '../../App.css'


export default function Addngo() {

  let navigate = useNavigate();

  const location = useLocation();
  const exportngousername = location.state ? location.state.ngousername : '';

  const [ngo, setNgo] = useState({
    ngousername: '',
    ngoname: '',
    ngopassword: ''
  });

  const {ngousername, ngoname, ngopassword} = ngo;

  const onInputChange = (e) => {
    setNgo({ ...ngo, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(ngo);

    const response = await axios.post("http://localhost:8080/postngo", ngo);
    const ngoid = response.data;

    navigate('/Oprfoodreq/Bookfoodreqs', { state: { exportngousername: ngousername } });
  }

  return (
    <div className='fullbody ngophoto'>
        <div className='login-container'>
        <form onSubmit={onSubmit} className="login-form">
                <h2>Register NGO</h2>
                
                    <div className='form-group'>
                        <label htmlFor="ngoname" className='form-label'>NGO Name</label>
                        <input type="text" className='form-control' name="ngoname" value={ngoname} onChange={onInputChange} placeholder='Enter your NGO name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="ngousername" className='form-label'>NGO Username</label>
                        <input type="text" className='form-control' name="ngousername" value={ngousername} onChange={onInputChange} placeholder='Enter your username' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="ngopassword" className='form-label'>NGO Password</label>
                        <input type="password" className='form-control' name="ngopassword" value={ngopassword} onChange={onInputChange} placeholder='Enter your NGO password' />
                    </div>
                    <div className="form-group buttons">
                    <button type='submit' className="btn submitbtn">Submit</button>
                    <Link to="/" className="btn newuserbtn">Cancel</Link>
                    </div>
                </form>
        </div>
    </div>
);
}