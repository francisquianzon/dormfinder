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
    MDBNavbarBrand,
    MDBBtn 
} from 'mdb-react-ui-kit';

import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LoggedIn(props){
  console.log(props.state.user)
  return(
    <>
    <MDBNavbarItem>
      <MDBDropdown>
      <MDBDropdownToggle tag='a' className='nav-link'>
        Signed in as: {props.state.user.name}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href='/' onClick={props.state.logout}>Logout</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </MDBNavbarItem>
    <MDBNavbarItem>
      <Link to="/browse">
          <MDBNavbarLink active aria-current='page' href='#'>
          Browse
          </MDBNavbarLink>
      </Link>
    </MDBNavbarItem>
    <MDBNavbarItem>
      <MDBNavbarLink >Learn more</MDBNavbarLink>
    </MDBNavbarItem>
    </>
  )
}

function NotLogged(){
  return(
    <>
      <MDBNavbarItem>
        <Link to="/register" state={{ type: true}}>
          <MDBBtn rounded className='me-2' color='primary'>Sign-up</MDBBtn>
        </Link>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <Link to="/login" state={{ type: false}}>
            <MDBBtn rounded className='me-2' color='light'>Login</MDBBtn>
        </Link> 
      </MDBNavbarItem>
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
    </>
  )
}

function Navbar1(props) {
    const [showNavRight, setShowNavRight] = useState(false);
    // console.log("Checking logged in status...");
    // console.log(props.state.auth);
    let showStatus;
    if(props.state.auth){
      showStatus = <LoggedIn state={{user : props.state.user, logout : props.state.logout}}/>
    }else{
      showStatus = <NotLogged/>
    }

    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer>
            <MDBNavbarBrand href='/'>
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
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              
          </MDBNavbarNav>

            <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              {showStatus}
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
    };

    showNavbarText(){
        this.setState({ showNavRight: !this.state.showNavRight });
    }

    render(){
        console.log("Logged in?");
        const auth = this.props.isAuthenticated
        const user = this.props.user
        
        return(
            <>
                <Navbar1 state={{auth: auth, user:user, logout: this.props.logout}}/>
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
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user
});


export default connect(mapStateToProps, { logout })(Navbar);