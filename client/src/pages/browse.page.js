import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from './components/navbar.component';
import Card from './components/estabcard.component';

export default class Test extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <Card/>
            </>
        )
    }
}