import React, {Component, useEffect, useState} from 'react';
// import Table from 'react-bootstrap/Table'
// import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link, useParams, useLocation, withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getEstablishments, deleteEstablishment } from '../actions/establishmentActions';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estab = useLocation();
      console.log(estab)
    //   const estabName = useParams();
      return <Component {...props} estab={estab}/>;
    }
  }

class EstabDetails extends Component{
// function EstabDetails(){

    render(){

        const name = this.props.estab.state.estab_name
        const id = this.props.estab.state.estab_id
        const desc = this.props.estab.state.estab_deet
        const price = this.props.estab.state.estab_price
        
        return(
            <>
            <Navbar/>
            <Container>
                <h1>{name}</h1> 
                <h3>ID: {id}</h3>
                <h3>Price: {price}</h3>
                <h3>Description:</h3>
                <p>{desc}</p>
            </Container>
            </>
        )
    }
}

export default locationHook(EstabDetails);
// export default EstabDetails;