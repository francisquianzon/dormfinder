import React, {Component, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../actions/establishmentActions';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';

// class EstabDetails extends Component{
function EstabDetails(){
    
    // render(){
        const { id } = useParams()

        return(
            <>
            <Navbar/>
            <Container>
                <h1>Page for {id}</h1>
            </Container>
            </>
        )
    // }
}

export default EstabDetails;