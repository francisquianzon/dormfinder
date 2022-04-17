import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';


export default class Headline extends Component{
    render(){
        return(
            <div class="carousel-inner headline d-flex flex-wrap justify-content-center mb-5">
                {/* <img class="headline-img" src=".././headline.png" alt="..."></img> */}
                <div class="container">
                    <div class="carousel-caption text-start carousel-headline">
                        <h1>A better way to search</h1>
                        <h1>for dorms in UPLB</h1>
                        <Link to="/browse">
                            <p><a class="btn btn-lg btn-primary" href="#">Browse Now</a></p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}