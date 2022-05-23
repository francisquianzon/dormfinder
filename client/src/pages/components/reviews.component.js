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
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import {
    Rating 
} from '@mui/material';

import { FaUserCircle } from 'react-icons/fa';
import { ImMobile2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

import Delayed from './delayed';

class Details extends Component{
    state = {
    loading: true
    }

    getReviewDetails(id){
        this.props.getReviews(id);
    }

    componentDidMount() {
        this.getReviewDetails(this.props.establishment_id)
    }

    render(){
        const { reviews } = this.props.reviews
        let average_score = 0;

        reviews?.map((review)=>(
            average_score += review.score
        ))
        
        average_score = Math.round((average_score/reviews.length) * 10) / 10
        console.log(average_score)

        return(
            <>
            <Delayed waitBeforeShow={1000}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                        {/* <MDBCard>
                            <MDBCardBody> */}
                            <MDBCol className="d-flex mb-2">
                                <h3>{reviews.length} Reviews</h3>
                                <h4 className="review-score">{average_score}</h4>
                                <Rating className=" mt-1" name="half-rating-read" defaultValue={average_score} precision={0.5} readOnly />
                                {/* <h6>Write a Review</h6> */}
                            </MDBCol>
                            <br></br>
                            {reviews?.map((revs)=>(
                                <div key={revs._id}>
                                    <MDBRow className="border-bottom mb-4">
                                        <MDBCol className="d-flex mb-2">
                                            <FaUserCircle size={40} />
                                            <MDBRow>
                                                <h6 className="mx-3 review-name">{revs.username}</h6>
                                                {/* <p className="mx-2 review-date-text">May 2022</p> */}
                                                <Rating size="small" className="star-ratings" defaultValue={revs.score} readOnly />
                                            </MDBRow>
                                            <MDBRow>
                                            </MDBRow>
                                        </MDBCol>
                                        <div className="reviews-text">
                                            <p >{revs.review}</p> 
                                        </div>
                                    </MDBRow>
                                    <br></br>
                                </div>
                            ))}
                            {/* </MDBCardBody>
                        </MDBCard> */}
                        </Col>
                    </Row>
                </Container>
            </Delayed>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews
}); 


export default connect(mapStateToProps, { getReviews })(Details);