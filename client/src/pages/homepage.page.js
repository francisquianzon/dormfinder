import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

export default class Homepage extends Component{
    render(){
        return(
            <>
            <Navbar/>
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
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol md={4}>
                                <img src="../../icon-home.svg" alt="..." height="120"></img>
                            </MDBCol>
                            <MDBCol md={8}>
                                <MDBRow><h5>Post an establishment</h5></MDBRow>
                                <MDBRow><p className="marketing-text">Just create an account as a landlord and post your establishment with the necessary information.</p></MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol md={4}>
                                <img src="../../icon-review.svg" alt="..." height="120"></img>
                            </MDBCol>
                            <MDBCol md={8}>
                                <MDBRow><h5>Write a Review</h5></MDBRow>
                                <MDBRow><p className="marketing-text">Help other users find the dorm they're looking for by writing a review. Every opinion counts!</p></MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol md={4}>
                            <img src="../../icon-search.svg" alt="..." height="120"></img>
                            </MDBCol>
                            <MDBCol md={8}>
                                <MDBRow><h5>Filter Search Results</h5></MDBRow>
                                <MDBRow><p className="marketing-text">It is now easier to find the dorm your looking for! With filter search results, you can adjust your search to your preferences.</p></MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer/>    
            </>
        )
    }
}

