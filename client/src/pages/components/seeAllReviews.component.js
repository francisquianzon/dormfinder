import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { 
    Nav,
    Form,
    Row,
    Col,
    Container
} from 'react-bootstrap';
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCol
  } from 'mdb-react-ui-kit';
import {
    Rating
} from "@mui/material";
import { FaUserCircle } from 'react-icons/fa';
import { addReview } from '../../actions/reviewActions';

class SeeAllReviews extends Component{
    constructor(){
        super();
        this.state = {
            modal: false,
            username: '',
            dorm_id: '',
            score: 0,
            review: '',
            value: 0
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    setValue(newValue) {
        this.setState({
            score: newValue
        })
    }


    render(){
        const { reviews } = this.props.reviews

        return(
            <>  
                { reviews.length < 4 ? null : <Nav.Link onClick={this.toggle} className="write-a-review nav-links">See All</Nav.Link>}
                <MDBModal staticBackdrop show={this.state.modal} setShow={this.state.modal}>
                    <MDBModalDialog centered size="lg">
                        <MDBModalContent>
                        <MDBModalHeader toggle={this.toggle}>
                            <h4>Reviews</h4>
                            <MDBBtn className='btn-close' color='none' onClick={this.toggle}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Container>
                            {reviews?.map((revs)=>(
                                <div key={revs._id}>
                                    <Row className="border-bottom mb-4">
                                        <Col className="d-flex mb-2">
                                            <FaUserCircle size={40} />
                                            <Row>
                                                <h6 className="mx-3 review-name">{revs.username}</h6>
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
                            </Container>
                        </MDBModalBody>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    reviews: state.reviews
})

export default connect(mapStateToProps, { addReview })(SeeAllReviews);