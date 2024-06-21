import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing the new CSS file

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="navbar-left">
                    <a href="/">
                        <strong>Food Distribution System</strong>
                    </a>
                    <Link to="/Oprfdsuser/Loginfdsuser">FDS</Link>
                    <Link to="/Oprngo/Loginngo">NGO</Link>
                    <Link to="/Pages/Teampage">Team</Link>
                    <Link to="/Pages/Teampage">Stats</Link>
                </div>
                <button
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                </button>
            </nav>
        </div>
    );
}
