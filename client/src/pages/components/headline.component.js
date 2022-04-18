import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';


export default class Headline extends Component{
    render(){
        return(
            <div className="carousel-inner headline d-flex flex-wrap justify-content-center mb-5">
                <div className="container">
                    <div className="carousel-caption text-start carousel-headline">
                        <h1>A better way to search</h1>
                        <h1>for dorms in UPLB</h1>
                        <Link to="/browse">
                            <button className="btn btn-lg btn-primary" href="#">Browse Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}