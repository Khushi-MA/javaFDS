import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    Food Distribution System
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="btn btn-outline-light" to="/Oprfdsuser/Addfdsuser" >FDS</Link>
                <Link className="btn btn-outline-light" to="/Oprngo/Addngo">NGO</Link>
                <Link  className="btn btn-outline-light" to="/Pages/Teampage">Team</Link>
            </nav>
        </div>
    );
}
