import React, {Component} from 'react';
import './components.css'
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            // <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-2 border-bottom main-header">
                    <a class="navbar-brand" href="#">
                        <img src=".././dormfinder_logo.png" alt="..." height="35"></img>
                    </a>
                    <a href="/" class="d-flex align-items-center me-md-auto text-dark text-decoration-none">
                        {/* <span class="fs-4">DormFinder</span> */}
                        <h3 class="text-style">Dorm</h3>
                        <h3 class="text-style text-style-brand">Finder</h3>
                    </a>

                    <div class="text-end">
                        <button type="button" class="btn btn-primary me-2">Sign-up</button>
                        <button type="button" class="btn btn-outline-dark me-2">Login</button>
                    </div>
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link">Browse Now</a></li>
                        <Link to="/test">
                            <li class="nav-item"><a href="#" class="nav-link">Learn More</a></li>
                        </Link>
                        
                    </ul>
                </header>
            // </div>
        )
    }
}