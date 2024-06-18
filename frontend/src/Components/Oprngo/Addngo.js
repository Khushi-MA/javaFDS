import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Addngo() {

  let navigate = useNavigate();

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
    await axios.post("http://localhost:8080/postngo", ngo);
    navigate('/Oprfoodreq/Addfoodreq');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-centre m-4'>Register NGO</h2>
          <form action="" onSubmit={(e) => onSubmit(e)}>
          <div className='md-3'>
              <label htmlFor="ngoname" className='form-label'>NGO Name</label>
              <input type="text" className='form-control' name="ngoname" value={ngoname} onChange={(e) => onInputChange(e)} placeholder='enter your NGO name' />
            </div>
            <div className='md-3'>
              <label htmlFor="ngousername" className='form-label'>NGO Username</label>
              <input type="text" className='form-control' name="ngousername" value={ngousername} onChange={(e) => onInputChange(e)} placeholder='enter your username' />
            </div>
            <div className='md-3'>
              <label htmlFor="ngopassword" className='form-label'>NGO Password</label>
              <input type="text" className='form-control' name="ngopassword" value={ngopassword} onChange={(e) => onInputChange(e)} placeholder='enter your NGO Password' />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}