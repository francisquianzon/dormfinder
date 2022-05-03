import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Button
} from 'react-bootstrap';

import Navbar from './components/navbar.component';
import DormCards from './components/dormCards.component';

export default class Test extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <Container>
                    <br></br>
                    <h2>Dorms</h2>
                    <DormCards/>
                </Container>
            </>
        )
    }
}