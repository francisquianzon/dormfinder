import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


export default class Marketing extends Component{
    render(){
        return(
            <>
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
        </>
        )
    }
}


