import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';


export default class Marketing extends Component{
    render(){
        return(
            <div className="container marketing">
                <div className="row">
                <div className="col-md-4">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 120x120" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">120x120</text></svg>
                        <h3>Add an establishment</h3>
                        <p>Just create an account and you're good to go!</p>

                </div>
                <div className="col-md-4">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 120x120" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">120x120</text></svg>
                        <h3>Write a Review</h3>
                        <p>Just create an account and you're good to go!</p>

                </div>
                <div className="col-md-4">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 120x120" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">120x120</text></svg>
                        <h3>Filter Search Results</h3>
                        <p>Just create an account and you're good to go!</p>
                </div>
            </div>
        </div>
        )
    }
}


