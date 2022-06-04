import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { loadUser } from '../actions/authActions';
import { connect } from 'react-redux';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

class Homepage extends Component{
    // componentDidMount(){
    //     this.props.loadUser()
    // }

    render(){
        return(
            <>
            <Navbar/>
            <div className="carousel-inner headline d-flex flex-wrap justify-content-center mb-5">
                <div className="container">
                    <div className="carousel-caption text-start carousel-headline">
                        <h1>The #1 site for searching</h1>
                        <h1>dorms in UPLB</h1>
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
                                <MDBRow><h5>Post your Dorm</h5></MDBRow>
                                <MDBRow><p className="marketing-text">Just create an account and post your dorm with the necessary information.</p></MDBRow>
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
                                <MDBRow><p className="marketing-text">Help other users find the dorm they're looking for by writing a review. All reviews are anonymous.</p></MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol md={4}>
                            <img src="../../icon-search.svg" alt="..." height="120"></img>
                            </MDBCol>
                            <MDBCol md={8}>
                                <MDBRow><h5>Filter and Search</h5></MDBRow>
                                <MDBRow><p className="marketing-text">It is now easier to find the dorm your looking for! With filter and search, you can adjust your search to your preferences.</p></MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br></br>
            <Footer/>    
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authentication
});

export default connect(mapStateToProps, { loadUser })(Homepage);
