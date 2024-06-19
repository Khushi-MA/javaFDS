import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Teampage from './Components/Pages/Teampage';
import Addfdsuser from './Components/Oprfdsuser/Addfdsuser';
import Editfdsuser from './Components/Oprfdsuser/Editfdsuser';
import Viewfdsuser from './Components/Oprfdsuser/Viewfdsuser';
import Addngo from './Components/Oprngo/Addngo';
import Editngo from './Components/Oprngo/Editngo';
import Viewngo from './Components/Oprngo/Viewngo';
import Addfoodreq from './Components/Oprfoodreq/Addfoodreq';
import Editfoodreq from './Components/Oprfoodreq/Editfoodreq';
import Viewfoodreq from './Components/Oprfoodreq/Viewfoodreq';
import Bookfoodreqs from './Components/Oprfoodreq/Bookfoodreqs';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Pages/Teampage" element={<Teampage />} />
          <Route exact path="/Oprfdsuser/Addfdsuser" element={<Addfdsuser />} />
          <Route exact path="/Oprfdsuser/Editfdsuser" element={<Editfdsuser />} />
          <Route exact path="/Oprfdsuser/Viewfdsuser" element={<Viewfdsuser />} />
          <Route exact path="/Oprngo/Addngo" element={<Addngo />} />
          <Route exact path="/Oprngo/Editngo" element={<Editngo />} />
          <Route exact path="/Oprngo/Viewngo" element={<Viewngo />} />
          <Route exact path="/Oprfoodreq/Addfoodreq" element={<Addfoodreq />} />
          <Route exact path="/Oprfoodreq/Editfoodreq" element={<Editfoodreq />} />
          <Route exact path="/Oprfoodreq/Viewfoodreq" element={<Viewfoodreq />} />
          <Route exact path="/Oprfoodreq/Bookfoodreqs" element={<Bookfoodreqs />} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
