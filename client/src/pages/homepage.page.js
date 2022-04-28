import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from './components/navbar.component';
import Headline from './components/headline.component';
import Marketing from './components/marketing.component';

export default class Homepage extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <Headline/>
            <Marketing/>            
            </>
        )
    }
}

