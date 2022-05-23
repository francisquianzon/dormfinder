import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import {
    Form,
    Alert,
} from 'react-bootstrap';

import { MDBCard, 
    MDBCardBody, 
    MDBCardTitle,
    MDBCardHeader,
    MDBCardText, 
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBContainer,
    MDBRadio
} from 'mdb-react-ui-kit';

import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { addEstablishment } from '../../actions/establishmentActions';

class PostCard extends Component{
    //initialize state attributes
    constructor(){
        super()
        this.state = {
            name: '',
            location: '',
            description: '',
            price_min: 0,
            price_max: 0,
            original_poster: {},
            mobile_info: '',
            email_info: '',
            landlord_check: ''
        }
    }

    //set values obtained from the forms to state attributes
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit = e => {
        e.preventDefault();
        
        if(this.state.name == '' || this.state.location == '' || this.state.description == '' || this.state.price_min == 0){
            alert("All fields are required");
            return false
        }
        console.log(this.state);
        //creates a json item
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            price_min: this.state.price_min,
            price_max: this.state.price_max,
            mobile_info: this.state.mobile_info,
            email_info: this.state.email_info,
            original_poster: this.props.user.username

        }

        // add item via addEstablishment action
        this.props.addEstablishment(newItem);
        
        this.setState({
            name: '',
            location: '',
            description: '',
            price_min: 0,
            price_max: 0,
            original_poster: {},
            mobile_info: '',
            email_info: '',
            landlord_check: ''
        });
        //reloads the window
        window.location.reload(false);
    }

    render(){
        // console.log(this.props.user._id)
        return(
            <>
                {/* <PostCard state={{ onSubmit: this.onSubmit, onChange: this.onChange}}/> */}
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="col-md-1"></MDBCol>
                    {/* <MDBCol><h2>Create a Post</h2></MDBCol> */}
                    <MDBCol></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol>
                        <MDBCard className="d-flex justify-content-center" style={{ width: '50rem' }}>
                            <MDBCardHeader><h3>Create a post</h3></MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardText><h4>Establishment details</h4></MDBCardText>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" type="Text" onChange={this.onChange} className="form-background"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control name="location" type="Text" placeholder="e.g. along F.O. Santos Rd." onChange={this.onChange} className="form-background"/>
                                        <Form.Text>Add a brief description of the establshiment's location or address</Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control name="description" as="textarea" rows="5" type="Text" onChange={this.onChange} className="form-background"/>
                                        <Form.Text>Add the establishment's description e.g. no. of bedrooms, amenaties, etc.</Form.Text>
                                    </Form.Group>

                                    <MDBRow>
                                        <MDBCol>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Min. Price</Form.Label>
                                                <Form.Control name="price_min" type="Number" onChange={this.onChange} className="form-background"/>
                                            </Form.Group>

                                        </MDBCol>
                                        <MDBCol>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Max. Price</Form.Label>
                                                <Form.Control name="price_max" type="Number" onChange={this.onChange} className="form-background"/>
                                            </Form.Group>
                                        </MDBCol>
                                        <Form.Text>If the establishment has a fixed price, just input the same price on both fields</Form.Text>
                                    </MDBRow>
                                    <br></br>
                                    <MDBCardText><h4>Contact information</h4></MDBCardText>
                                        <MDBRow>
                                            <MDBCol>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Mobile Number</Form.Label>
                                                    <Form.Control name="mobile_info" type="Text" onChange={this.onChange} className="form-background"/>
                                                </Form.Group>

                                            </MDBCol>
                                            <MDBCol>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control name="email_info" type="Text" onChange={this.onChange} className="form-background"/>
                                                </Form.Group>
                                            </MDBCol>
                                        <Form.Text>For additional contact information, add them in the description field</Form.Text>
                                        </MDBRow>
                                        <br></br>
                                        <MDBCardText><h5>Are you posting as the Landlord?</h5></MDBCardText>
                                        <div>
                                            <MDBRadio name='landlord_check' id='landlord_true' label='Yes, I am the Landlord' />
                                            <MDBRadio name='landlord_check' id='landlord_false' label='No, I am posting on behalf of the Landlord' />
                                        </div>
                                    <br></br>
                                    <MDBBtn variant="primary" type="submit">
                                        Post
                                    </MDBBtn>
                                </Form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
                <br></br>
            </MDBContainer>
            </>
        )
    }
}

const mapStateToProps = state => ({
    establishment: state.establishment,
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    error: state.error
})

export default connect(mapStateToProps, { addEstablishment })(PostCard);