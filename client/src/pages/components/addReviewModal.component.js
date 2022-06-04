import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { 
    Nav,
    Form,
    Col,
    Row
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
import { addReview } from '../../actions/reviewActions';

class AddReview extends Component{
    constructor(){
        super();
        this.state = {
            modal: false,
            username: '',
            dorm_id: '',
            score: 0,
            score_cleanliness: 0,
            score_price_value: 0,
            score_location: 0,
            score_amenaties: 0,
            score_security: 0,
            review: '',
            value: 0
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        console.log("Clicked!")
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newReview = {
            username: this.props.state.user.username,
            dorm_id: this.props.state.establishment_id,
            score: this.state.score,
            score_cleanliness: this.state.score_cleanliness,
            score_price_value: this.state.score_price_value,
            score_location: this.state.score_location,
            score_amenaties: this.state.score_amenaties,
            score_security: this.state.score_security,
            review: this.state.review
        }

        this.setState({
            score: 0,
            score_cleanliness: 0,
            score_price_value: 0,
            score_location: 0,
            score_amenaties: 0,
            score_security: 0,
            review:''
        })

        // add review via addreview action
        this.props.addReview(newReview);
        //close modal
        this.toggle();
    }

    // setValue(newValue) {
    //     this.setState({
    //         score: newValue
    //     })
    // }


    render(){
        console.log(this.state);

        return(
            <>  
                { this.props.isAuthenticated && <Nav.Link onClick={this.toggle} className="write-a-review nav-links">Write a Review</Nav.Link>}
                <MDBModal staticBackdrop show={this.state.modal} setShow={this.state.modal}>
                    <MDBModalDialog centered size="lg">
                        <MDBModalContent>
                        <MDBModalHeader toggle={this.toggle}>
                            <h4>Write a Review</h4>
                            <MDBBtn className='btn-close' color='none' onClick={this.toggle}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form onSubmit={this.onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name="review" as="textarea" rows="5" type="Text" onChange={this.onChange} className="form-background"/>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col className="d-flex">
                                            <h6>Overall Rating</h6>
                                            {/* <h6 className="text-muted mx-2"> (Rate your overall experience with the dorm) </h6> */}
                                        </Col>
                                        <Rating
                                            className='mx-2'
                                            size="small"
                                            name="simple-controlled"
                                            value={this.state.score}
                                            onChange={(event, newValue) => {
                                                this.setState({ score: newValue });
                                            }}
                                            />
                                    </Row>
                                    <br></br>
                                    <Row className="d-flex">
                                        <h6>Cleanliness:</h6>
                                        <Rating
                                            className='mx-2'
                                            size="small"
                                            name="simple-controlled"
                                            value={this.state.score_cleanliness}
                                            onChange={(event, newValue) => {
                                                // this.setValue(newValue);
                                                this.setState({ score_cleanliness: newValue });
                                            }}
                                        />
                                    </Row>
                                    <br></br>
                                    <Row className="d-flex">
                                        <h6>Value for the Price:</h6>
                                        <Rating
                                            className='mx-2'
                                            size="small"
                                            name="simple-controlled"
                                            value={this.state.score_price_value}
                                            onChange={(event, newValue) => {
                                                // this.setValue(newValue);
                                                this.setState({ score_price_value: newValue });
                                            }}
                                        />
                                    </Row>
                                </Col>
                                <Col>
                                <Row className="d-flex">
                                    <h6>Location:</h6>
                                    <Rating
                                        className='mx-2'
                                        size="small"
                                        name="simple-controlled"
                                        value={this.state.score_location}
                                        onChange={(event, newValue) => {
                                            // this.setValue(newValue);
                                            this.setState({ score_location: newValue });
                                        }}
                                        />
                                </Row>
                                <br></br>
                                <Row className="d-flex">
                                    <h6>Amenaties:</h6> 
                                    <Rating
                                        className='mx-2'
                                        size="small"
                                        name="simple-controlled"
                                        value={this.state.score_amenaties}
                                        onChange={(event, newValue) => {
                                            // this.setValue(newValue);
                                            this.setState({ score_amenaties: newValue });
                                        }}
                                        />
                                </Row>
                                <br></br>
                                <Row className="d-flex">
                                    <h6>Security:</h6>
                                    <Rating
                                        className='mx-2'
                                        size="small"
                                        name="simple-controlled"
                                        value={this.state.score_security}
                                        onChange={(event, newValue) => {
                                            // this.setValue(newValue);
                                            this.setState({ score_security: newValue });
                                        }}
                                    />
                                </Row>
                                
                                </Col>
                            </Row>
                                
                            <br></br>
                            <MDBBtn>Submit</MDBBtn>
                            </Form>
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
    user: state.authentication.user
})

export default connect(mapStateToProps, { addReview })(AddReview);