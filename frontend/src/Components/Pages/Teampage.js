import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the arrow icons
// import "./About.css"; // Import the CSS file for About page


import "../Style.css";

import klelogo from "../Assets/klelogo.png"
// import logo1 from "../Assets/strlogo.png";


import p1 from "../Assets/p1.jpg";
import p2 from "../Assets/p2.jpg";
import p3 from "../Assets/p3.jpg";
import p4 from "../Assets/p4.jpg";


import git from "../Assets/git.png";
import link from "../Assets/link.png";
import portfilio from "../Assets/portfolio.png";


// import klink from "https://linkedin.com/in/khushi-appannavar";

function Teampage() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const handleQuestionClick = (id) => {
    setExpandedQuestion((prevState) => (prevState === id ? null : id));
  };

  return (
    <div className="home-container fullbody statphoto">
      <header className="colset">
        <div className="colcard">
          <div className="colcard-left">
            <img
              src={klelogo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="colcard-right">
            <h1>KLE Technological University</h1>
            <h2>School of Computer Science and Engineering</h2>
            <p>Minor Project 1</p>
          </div>
        </div>
      </header>

      <header>
        <h1>
          <strong>The Team</strong>
        </h1>
        <div className="teamcards">

          {/* sanket */}
          <div class="card">
            <img class="card-img-top" src={p1} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <strong>Sanket Kothari</strong>
                <br />01FE21BCS358 (159)
              </p>
              <div className="link-images">
                <a href="https://github.com/SK-3000">
                  <img src={git} />
                </a>
                <a href="https://www.linkedin.com">
                  <img src={link} />
                </a>
                <a href="https://sites.google.com/view/sanketskothari/home">
                  <img src={portfilio} />
                </a>
              </div>
            </div>
          </div>

          {/* Praveen */}
          <div class="card">
            <img class="card-img-top" src={p2} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <strong>Praveen Puttannavar</strong>
                <br />01FE21BCS148 (223)
              </p>
              <div className="link-images">
                <a href="link:https://github.com/praveen0148">
                  <img src={git} />
                </a>
                <a href="https://www.linkedin.com/in/praveen-puttannavar-8a561630a/">
                  <img src={link} />
                </a>
                <a href="https://sites.google.com/view/praveenputtnnavar/home">
                  <img src={portfilio} />
                </a>
              </div>
            </div>
          </div>

          {/* Khushi */}
          <div class="card">
            <img class="card-img-top" src={p3} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <strong>Khushi M Appannavar</strong>
                <br />01FE21BCS126 (524)
              </p>
              <div className="link-images">
                <a href="https://github.com/Khushi-MA">
                  <img src={git} />
                </a>
                <a href="https://linkedin.com/in/khushi-appannavar">
                  <img src={link} />
                </a>
                <a href="https://sites.google.com/kletech.ac.in/khushi-fds-mp1?usp=sharing">
                  <img src={portfilio} />
                </a>
              </div>
            </div>
          </div>

          {/* Shweta */}
          <div class="card">
            <img class="card-img-top" src={p4} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <strong>Shweta V Pagadi</strong>
                <br />01FE21BCI009 (108)
              </p>
              <div className="link-images">
                <a href="https://github.com/01fe21bci009shweta">
                  <img src={git} />
                </a>
                <a href="https://www.linkedin.com">
                  <img src={link} />
                </a>
                <a href="https://sites.google.com/kletech.ac.in/foodwastemanagement/home">
                  <img src={portfilio} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>
  );
}

export default Teampage;