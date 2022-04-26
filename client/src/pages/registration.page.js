import React, { Component } from 'react';

import Navbar from './components/navbar.component';
import RegisterCard from './components/registercard.component';

export default class Registration extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <RegisterCard/>
            </>
        )
    }
}