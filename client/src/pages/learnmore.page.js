import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { loadUser } from '../actions/authActions';
import { connect } from 'react-redux';
import './components/components.css';
import {
    Row,
    Col,
    Container
} from 'react-bootstrap';

import Navbar from './components/navbar.component';

export default class LearnMore extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <br></br>
            <Container className="border-bottom">
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center">
                    <img
                        src="../dormfinder_logo.svg"
                        alt="dormfinder_logo"
                        height="100"
                    ></img>
                    </Col>
                </Row>
                <br></br>
                <Row className="mt-2">
                    <Col></Col>
                    <Col xs={8} className="justify-content-center about-info mb-3">
                        <p >Dormfinder is an online information and rating system for student dormitories inside and outside UPLB. Its goal is to provide an online catalogue for students where they could browse and search for prospective dormitories. It also aims to create a platform for landlords and dorm owners to advertise their establshiment, as well as to provide details such as COVID-19 health and safety protocols which could help students filter establsihments based on their preferences.</p>
                        <p>This website is the front-facing application of an SP project developed by Francis Gabriel P. Quianzon.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </>
        )
    }
}