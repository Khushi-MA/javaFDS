import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


import '../../App.css'


export default function Addfdsuser() {
  let navigate = useNavigate();

  const location = useLocation();
  const exportfdsusername = location.state ? location.state.fdsusername : '';

  const [fdsuser, setFdsuser] = useState({
    fdsname: '',
    fdsusername: '',
    fdspassword: ''
  });

  const {fdsname, fdsusername, fdspassword} = fdsuser;

  const onInputChange = (e) => {
    setFdsuser({...fdsuser, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/postfdsuser", fdsuser);
    const fdsuserid = response.data; // assuming the response contains the fdsuserid
    navigate('/Oprfoodreq/Addfoodreq', { state: { exportfdsusername: fdsusername } });
  };

  return (
    <div className='container maindiv'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register as FDS Member</h2>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='fdsname' className='form-label'>Name</label>
                        <input type='text' className='form-control' id='fdsname' name='fdsname' value={fdsname} onChange={onInputChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='fdsusername' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='fdsusername' name='fdsusername' value={fdsusername} onChange={onInputChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='fdspassword' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='fdspassword' name='fdspassword' value={fdspassword} onChange={onInputChange} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </form>
            </div>
        </div>
    </div>
);

}