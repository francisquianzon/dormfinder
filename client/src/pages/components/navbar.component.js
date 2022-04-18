import React, {Component} from 'react';
import './components.css'
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            // <div class="container">
                <header className="d-flex flex-wrap justify-content-center py-2 border-bottom main-header">
                    <a className="navbar-brand" href="/">
                        <img src="../../dormfinder_logo.png" alt="..." height="35"></img>
                    </a>
                    <a href="/" className="d-flex align-items-center me-md-auto text-dark text-decoration-none">
                        {/* <span className="fs-4">DormFinder</span> */}
                        <h3 className="text-style">Dorm</h3>
                        <h3 className="text-style text-style-brand">Finder</h3>
                    </a>

                    <div className="text-end">
                        <button type="button" className="btn btn-primary me-2">Sign-up</button>
                        <button type="button" className="btn btn-outline-secondary me-2">Login</button>
                    </div>
                    <ul className="nav nav-pills">
                        {/* <Link to="/browse"> */}
                            <li className="nav-item"><a href="/browse" className="nav-link">Browse</a></li>
                        {/* </Link> */}
                        <li className="nav-item"><a href="#" className="nav-link">Learn More</a></li>
                    </ul>
                </header>
            // </div>
        )
    }
}