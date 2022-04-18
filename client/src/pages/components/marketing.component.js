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
                        <p>Just create an account as a landlord and the establishment with the necessary information.</p>

                </div>
                <div className="col-md-4">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 120x120" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">120x120</text></svg>
                        <h3>Write a Review</h3>
                        <p>Help other users find the dorm they're looking for by writing a review. Every opinion counts!</p>

                </div>
                <div className="col-md-4">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 120x120" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">120x120</text></svg>
                        <h3>Filter Search Results</h3>
                        <p>It is now easier to find the dorm your looking for! With filter search results, you can adjust your search to your preferences.</p>
                </div>
            </div>
        </div>
        )
    }
}


