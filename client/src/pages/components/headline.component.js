import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import {
    MDBBtn
} from 'mdb-react-ui-kit';


export default class Headline extends Component{
    render(){
        return(
            <div className="carousel-inner headline d-flex flex-wrap justify-content-center mb-5">
                <div className="container">
                    <div className="carousel-caption text-start carousel-headline">
                        <h1>A better way to search</h1>
                        <h1>for dorms in UPLB</h1>
                        <Link to="/browse">
                            <MDBBtn rounded className="btn btn-lg btn-primary" href="#">Browse Now</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}