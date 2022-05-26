import React, {Component} from 'react';
import {
    Form,
    Alert
} from 'react-bootstrap';

import { MDBCard, 
    MDBCardBody, 
    MDBCardHeader,
    MDBCardText, 
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBContainer,
    MDBRadio
} from 'mdb-react-ui-kit';

import { connect } from 'react-redux';
import { addEstablishment, uploadImage } from '../../actions/establishmentActions';

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
            landlord_check: null,
            pictures: '',
            error_msg: null,
            alert_type: ''
        }
    }

    //set values obtained from the forms to state attributes
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleFileUpload = async (e) => {
        //retrieives the uploaded files
        const file = e.target.files;
        let file_base64 = [];

        //converts the uploaded files to base64 and puts in an array
        // for(let i=0;i<file.length;i++){
        //     file_base64.push(await this.convertToBase64(file[i]))
        // }

        // console.log(file_base64);
        this.setState({
            pictures:file
        })
        // setPostImage({ ...postImage, myFile: base64 });
    };

    convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
            resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
            reject(error);
            };
        });
    };


    onSubmit = e => {
        e.preventDefault();
        
        if(this.state.name == '' 
        || this.state.location == '' 
        || this.state.description == '' 
        || this.state.price_min == 0
        || this.state.price_max == 0
        || this.state.mobile_info == ''
        ){
            // alert("All fields are required");
            this.setState({
                error_msg: "Please enter required fields",
                alert_type: "danger"
            })
            return false
        }
        let pictures = []

        //creates a formData for file upload
        const formData = new FormData();
        for(let j=0;j<this.state.pictures.length;j++){
            //renames the pictures first
            const newName = new Date().getTime() + this.state.pictures[j].name; 
            formData.append('demo_images', this.state.pictures[j], newName)
            pictures.push(newName);
        }

        this.props.uploadImage(formData);

        //creates a json item
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            price_min: this.state.price_min,
            price_max: this.state.price_max,
            mobile_info: this.state.mobile_info,
            email_info: this.state.email_info,
            original_poster: this.props.user.username,
            pictures
        }

        // console.log("newItem")
        // console.log(newItem)

        // add item via addEstablishment action
        this.props.addEstablishment(newItem);
        
        this.setState({
            name: '',
            location: '',
            description: '',
            price_min: 0,
            price_max: 0,
            mobile_info: '',
            email_info: '',
            landlord_check: null,
            error_msg: "Successfully added!",
            alert_type: "success"
        });

        //reloads the window
        // window.location.reload(false);
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
                    <MDBCol className="d-flex justify-content-center">
                        <MDBCard className="d-flex justify-content-center" style={{ width: '50rem' }}>
                            <MDBCardHeader><h3>Create a post</h3></MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardText><h4>Establishment details</h4></MDBCardText>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h5>Name</h5></Form.Label>
                                        <Form.Control value={this.state.name} name="name" type="Text" onChange={this.onChange} className="form-background"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h5>Location</h5></Form.Label>
                                        <Form.Control value={this.state.location} name="location" type="Text" placeholder="e.g. along F.O. Santos Rd." onChange={this.onChange} className="form-background"/>
                                        <Form.Text>Add a brief description of the establshiment's location or address</Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h5>Description</h5></Form.Label>
                                        <Form.Control value={this.state.description} name="description" as="textarea" rows="5" type="Text" onChange={this.onChange} className="form-background"/>
                                        <Form.Text>Add the establishment's description e.g. no. of bedrooms, amenaties, etc.</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label><h5>Images</h5></Form.Label>
                                        <Form.Control name="pictures" type="file" onChange={(e) => this.handleFileUpload(e)} multiple className="form-background"/>
                                        <Form.Text>Add pictures to your establishment</Form.Text>
                                    </Form.Group>
                                    <MDBRow>
                                        <MDBCol>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><h5>Min. Price</h5></Form.Label>
                                                <Form.Control value={this.state.price_min} name="price_min" type="Number" onChange={this.onChange} className="form-background"/>
                                            </Form.Group>

                                        </MDBCol>
                                        <MDBCol>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><h5>Max Price</h5></Form.Label>
                                                <Form.Control value={this.state.price_max} name="price_max" type="Number" onChange={this.onChange} className="form-background"/>
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
                                                    <Form.Control value={this.state.mobile_info} name="mobile_info" type="Text" onChange={this.onChange} className="form-background"/>
                                                </Form.Group>

                                            </MDBCol>
                                            <MDBCol>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control value={this.state.email_info} name="email_info" type="Text" onChange={this.onChange} className="form-background"/>
                                                </Form.Group>
                                            </MDBCol>
                                        <Form.Text>For additional contact information, add them in the description field</Form.Text>
                                        </MDBRow>
                                        <br></br>
                                        <MDBCardText><h5>Are you posting as the Landlord?</h5></MDBCardText>
                                        <div>
                                            <MDBRadio checked={this.state.landlord_check} name='landlord_check' id='landlord_true' label='Yes, I am the Landlord' />
                                            <MDBRadio checked={this.state.landlord_check} name='landlord_check' id='landlord_false' label='No, I am posting on behalf of the Landlord' />
                                        </div>
                                    <br></br>
                                    { this.state.error_msg ? <Alert variant={this.state.alert_type}>{this.state.error_msg}</Alert> : null }
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

export default connect(mapStateToProps, { addEstablishment, uploadImage })(PostCard);