import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

import './Home.css';


import backgroundImage from '../Assets/cookback.jpg';



export default function Home() {

    const [fdsuser, setFdsuser] = useState([]);
    const [ngo, setNgo] = useState([]);
    const [foodreq, setFoodreq] = useState([]);

    useEffect(() => {
        loadFdsusers();
        loadNgos();
        loadFoodreqs();
    }, []);

    const loadFdsusers = async () => {
        const result = await axios.get("http://localhost:8080/getallfdsusers");
        //   console.log(result);
        setFdsuser(result.data);
    };

    const loadNgos = async () => {
        const result = await axios.get("http://localhost:8080/getallngos");
        //   console.log(result);
        setNgo(result.data);
    };

    const loadFoodreqs = async () => {
        const result = await axios.get("http://localhost:8080/getallfoodreqs");
        // console.log(result);
        setFoodreq(result.data);
    }


    return (
        <div className="fullbody homephoto" style={{marginTop: "50px"}}>
            <div className="login-container" >
               <div className="homepage">
                <h1 className="homeheading">Project mission</h1>
               <p className="homepara">
                
Our Food Management System is a dedicated initiative aimed at efficiently distributing food to those in need. This system ensures that surplus food from various sources, including restaurants, supermarkets, and individuals, reaches the poor and hungry, promptly and organized. Our mission is to combat hunger, reduce food waste, and foster a compassionate community by providing nutritious meals to those in need. 
                </p>
                <p className="italicpara">Join us in making a difference and ensuring that no one goes to bed hungry. </p>

               </div>
            </div>
        </div>
         
    );
}
