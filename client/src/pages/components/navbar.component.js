import React, { Component, useState } from 'react';
import './components.css'
import {Link, useLocation} from 'react-router-dom';

import {
    NavLink,
    Fragment,
    Container
} from 'react-bootstrap';

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Navbar1(props) {
    const [showNavRight, setShowNavRight] = useState(false);
    
    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer>
            <MDBNavbarBrand href='#'>
                <img src="../../dormfinder_logo3.png" alt="..." height="40"></img>
            </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarRightAlignExample'
            aria-controls='navbarRightAlignExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <Link to="/browse">
                    <MDBNavbarLink active aria-current='page' href='#'>
                    Browse
                    </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Learn more</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }


class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            showNavRight: false,
        };
    };

    static propTypes = {
        logout: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    showNavbarText(){
        this.setState({ showNavRight: !this.state.showNavRight });
    }

    render(){
        console.log(this.state.showNavRight);

        return(
            <>
                <Navbar1 test={"this is a test"}/>
            </>
        )
        //     </> 
        //     // <>
        //     //     <header className="d-flex flex-wrap justify-content-center py-2 border-bottom main-header">
        //     //         <a className="navbar-brand" href="/">
        //     //             <img src="../../dormfinder_logo.png" alt="..." height="35"></img>
        //     //         </a>
        //     //         <a href="/" className="d-flex align-items-center me-md-auto text-dark text-decoration-none">
        //     //             {/* <span className="fs-4">DormFinder</span> */}
        //     //             <h3 className="text-style">Dorm</h3>
        //     //             <h3 className="text-style text-style-brand">Finder</h3>
        //     //         </a>

        //     //         <div className="text-end">
        //     //             <Link to="/register" state={{ type: true}}>
        //     //                 <button type="button" className="btn btn-primary me-2">Sign-up</button>
        //     //             </Link>
        //     //             <Link to="/login" state={{ type: false}}>
        //     //                 <button type="button" className="btn btn-login btn-outline-secondary me-2">Login</button>
        //     //             </Link>
        //     //         </div>
        //     //         <ul className="nav nav-pills">
        //     //             <li className="nav-item"><a href="/browse" className="nav-link">Browse</a></li>
        //     //             <li className="nav-item"><a href="#" className="nav-link">Learn More</a></li>
        //     //             <NavLink onClick={this.props.logout}>Logout</NavLink>
        //     //         </ul>
        //     //     </header>
        //     // </>
        // )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated
});


export default connect(mapStateToProps, { logout })(Navbar);