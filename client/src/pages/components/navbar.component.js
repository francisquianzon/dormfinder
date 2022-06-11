import React, { Component, useState } from 'react';
import './components.css'
import {Link} from 'react-router-dom';

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

import { FaUserCircle } from 'react-icons/fa';


import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LoggedIn(props){
  let access = false;

  if(props.state.user.class === "admin"){
    access = true
  }


  return(
    <>
      <MDBNavbarItem>
        <Link to="/browse">
            <MDBNavbarLink active aria-current='page' className="nav-links">
            Browse
            </MDBNavbarLink>
        </Link>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <Link to="/about">
          <MDBNavbarLink className="nav-links">Learn more</MDBNavbarLink>
        </Link>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBDropdown>
        <MDBDropdownToggle tag='a' className='nav-link nav-links'>
          <FaUserCircle size={30}/>  {props.state.user.name}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            {access === true
              ? 
              <Link to="/browse.admin">
                <MDBDropdownLink>Admin</MDBDropdownLink>
              </Link>
              : 
              <Link to="/addestablishment">
                <MDBDropdownLink>Create a post</MDBDropdownLink>
              </Link>
            }
            {/* <MDBDropdownLink href='/addestablishment' >Create a post</MDBDropdownLink> */}
            <MDBDropdownLink href='/' onClick={props.state.logout}>Logout</MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
        </MDBDropdown>
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
            <MDBNavbarLink active aria-current='page' className="nav-links">
            Browse
            </MDBNavbarLink>
        </Link>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink  className="nav-links">Learn more</MDBNavbarLink>
      </MDBNavbarItem>
    </>
  )
}

function Navbar1(props) {
    const [showNavRight, setShowNavRight] = useState(false);
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
                  <img src="../../dormfinder_logo.svg" alt="..." height="45"></img>
            </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarRightAlignExample'
            aria-controls='navbarRightAlignExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className="align-left"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              
          </MDBNavbarNav>

            <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              { props.state.isLoading ? null : <>{showStatus}</> }
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
        console.log(this.props.isLoading);
        const auth = this.props.isAuthenticated
        const user = this.props.user
        
        return(
            <>
                <Navbar1 state={{auth: auth, user:user, logout: this.props.logout, isLoading: this.props.isLoading}}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    isLoading: state.authentication.isLoading
});


export default connect(mapStateToProps, { logout })(Navbar);