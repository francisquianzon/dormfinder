import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import {
    Form,
    Alert,
} from 'react-bootstrap';

import { MDBCard, 
    MDBCardBody, 
    MDBCardTitle,
    MDBCardHeader,
    MDBCardText, 
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBContainer,
    MDBRadio
} from 'mdb-react-ui-kit';

import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { addEstablishment } from '../actions/establishmentActions';
import PostCard from './components/postCard.component'

import Navbar from './components/navbar.component';

class AddEstablishment extends Component{
    render(){
        // console.log(this.props.user._id)
        return(
            <>
            <Navbar/>
            <br></br>
            <PostCard/>
            </>
        )
    }
}

export default AddEstablishment;