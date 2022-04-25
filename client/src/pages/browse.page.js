import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Button
} from 'react-bootstrap';

import Navbar from './components/navbar.component';
import Card from './components/estabcard.component';

export default class Test extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <Container>
                    <br></br>
                    <h2>Establishments</h2>
                    <Card/>
                </Container>
            </>
        )
    }
}