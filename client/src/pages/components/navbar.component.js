import React, {Component} from 'react';
import './components.css'
import {Link} from 'react-router-dom';
import {
    NavLink,
    Fragment
} from 'react-bootstrap';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navbar extends Component{
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

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
                        <Link to="/register" state={{ type: true}}>
                            <button type="button" className="btn btn-primary me-2">Sign-up</button>
                        </Link>
                        <Link to="/login" state={{ type: false}}>
                            <button type="button" className="btn btn-login btn-outline-secondary me-2">Login</button>
                        </Link>
                    </div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/browse" className="nav-link">Browse</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Learn More</a></li>
                        <NavLink onClick={this.props.logout}>Logout</NavLink>
                    </ul>
                </header>
            // </div>
        )
    }
}


export default connect(null, { logout })(Navbar);