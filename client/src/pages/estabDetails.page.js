import React, {Component, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link, useParams, useLocation, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../actions/establishmentActions';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estabID = useLocation();
      return <Component {...props} estabID={estabID} />;
    }
  }

class EstabDetails extends Component{
// function EstabDetails(){
    
    
    render(){
        // const { id } = useParams()
        // const location = useLocation()
        // const {estab_id} = location.state
        const {estab_id} = this.props.estabID.state

        return(
            <>
            <Navbar/>
            <Container>
                <h1>Page for and {estab_id}</h1> 
                {/* <h1>Page for and eme</h1>  */}
            </Container>
            </>
        )
    }
}

export default locationHook(EstabDetails);
// export default EstabDetails;