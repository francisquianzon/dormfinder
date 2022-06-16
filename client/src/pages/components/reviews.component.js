import React, { Component } from 'react';
import './components.css'
import { connect } from 'react-redux';
import {  getReviews } from '../../actions/reviewActions';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody
} from 'mdb-react-ui-kit';

import {
    Rating 
} from '@mui/material';

import { FaUserCircle } from 'react-icons/fa';
import Delayed from './delayed';
import AddReview from './addReviewModal.component';
import SeeAllReviews from './seeAllReviews.component';

class Reviews extends Component{
    state = {
        loading: true
    }

    render(){
        const { reviews } = this.props.reviews
        const show_reviews = reviews.slice(0,3)
        let hasReviews = false;
        
        let average_score = 0;
        let average_score_cleanliness = 0;
        let average_score_price_value = 0;
        let average_score_location = 0;
        let average_score_amenaties = 0;
        let average_score_security = 0;

        if(reviews.length > 0){
            hasReviews = true;
            reviews.map((review)=>(
                average_score += review.score,
                average_score_cleanliness += review.score_cleanliness,
                average_score_price_value += review.score_price_value,
                average_score_location += review.score_location,
                average_score_amenaties += review.score_amenaties,
                average_score_security += review.score_security
            ))
            
            average_score = Math.round((average_score/reviews.length) * 10) / 10;
            average_score_cleanliness = Math.round((average_score_cleanliness/reviews.length) * 10) / 10;
            average_score_price_value = Math.round((average_score_price_value/reviews.length) * 10) / 10;
            average_score_location = Math.round((average_score_location/reviews.length) * 10) / 10;
            average_score_amenaties = Math.round((average_score_amenaties/reviews.length) * 10) / 10;
            average_score_security = Math.round((average_score_security/reviews.length) * 10) / 10
        }
        
        return(
            <>
            <Delayed waitBeforeShow={1000}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Col className="d-flex">
                                <Col className="d-flex mb-2">
                                    <h3>{reviews.length} Reviews</h3>
                                    { hasReviews && <h4 className="review-score">{average_score}</h4>}
                                    { hasReviews && <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score} precision={0.5} readOnly />}
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <AddReview state={{
                                        user: this.props.user,
                                        establishment_id: this.props.establishment_id
                                    }}/>
                                </Col>
                            </Col>
                        <br></br>
                        {show_reviews?.map((revs)=>(
                            <div key={revs._id}>
                                <Row className="border-bottom mb-4">
                                    <Col className="d-flex mb-2">
                                        <FaUserCircle size={40} />
                                        <Row>
                                            <h6 className="mx-3 review-name">{revs.username}</h6>
                                            {/* <p className="mx-2 review-date-text">May 2022</p> */}
                                            <Rating size="small" className="star-ratings" defaultValue={revs.score} readOnly />
                                        </Row>
                                        <Row>
                                        </Row>
                                    </Col>
                                    <div className="reviews-text">
                                        <p >{revs.review}</p> 
                                    </div>
                                </Row>
                                <br></br>
                            </div>
                        ))}
                        <Row>
                            <Col></Col>
                            <Col className="d-flex justify-content-center">
                            <SeeAllReviews/>
                            </Col>
                            <Col></Col>
                        </Row>
                        </Col>
                        { hasReviews && 
                        <Col>
                            <MDBCard>
                                <MDBCardBody>
                                <MDBCardTitle>Review Overview</MDBCardTitle>
                                <br></br>
                                <Row>
                                    <Row>
                                        <Col>
                                        Cleanliness
                                        </Col>
                                        <Col>
                                        <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score_cleanliness} precision={0.5} readOnly />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        Value for the Price
                                        </Col>
                                        <Col>
                                        <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score_price_value} precision={0.5} readOnly />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        Location
                                        </Col>
                                        <Col>
                                        <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score_location} precision={0.5} readOnly />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        Amenities
                                        </Col>
                                        <Col>
                                        <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score_amenaties} precision={0.5} readOnly />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        Security
                                        </Col>
                                        <Col>
                                        <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score_security} precision={0.5} readOnly />
                                        </Col>
                                    </Row>
                                </Row>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        }
                    </Row>
                    <br></br>
                </Container>
            </Delayed>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews,
    user: state.authentication.user
}); 


export default connect(mapStateToProps, { getReviews })(Reviews);