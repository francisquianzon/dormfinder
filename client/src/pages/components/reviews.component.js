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
    MDBCol
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
        let average_score = 0;
        let hasReviews = false;

        if(reviews.length > 0){
            hasReviews = true;
            reviews.map((review)=>(
                average_score += review.score
            ))
            
            average_score = Math.round((average_score/reviews.length) * 10) / 10
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