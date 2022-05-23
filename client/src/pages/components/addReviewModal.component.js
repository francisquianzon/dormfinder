import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { 
    Nav,
    Form 
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
            review: this.state.review
        }

        // add review via addreview action
        this.props.addReview(newReview);
        //close modal
        this.toggle();
    }

    setValue(newValue) {
        this.setState({
            score: newValue
        })
    }


    render(){
        return(
            <>
                <Nav.Link onClick={this.toggle}>Write a Review</Nav.Link>
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
                                <MDBCol className="d-flex">
                                    <h6>Rating:</h6>
                                    <Rating
                                        className='mx-2'
                                        size="small"
                                        name="simple-controlled"
                                        value={this.state.score}
                                        onChange={(event, newValue) => {
                                            this.setValue(newValue);
                                        }}
                                    />
                                </MDBCol>
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
    user: state.authentication.user
})

export default connect(mapStateToProps, { addReview })(AddReview);