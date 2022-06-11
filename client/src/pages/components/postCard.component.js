import React, {Component} from 'react';
import {
    Form,
    Alert,
    Row,
    Col
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
            alert_type: '',
            guideline_1: false,
            guideline_2: false,
            guideline_3: false,
            guideline_4: false,
            guideline_5: false
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
        for(let i=0;i<file.length;i++){
            file_base64.push(await this.convertToBase64(file[i]))
        }

        // console.log(file_base64);
        this.setState({
            // pictures:file
            pictures: file_base64
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
        
        //checks if necessary fields are entered=================
        // if(this.state.name === '' 
        // || this.state.location === '' 
        // || this.state.description === '' 
        // || this.state.price_min === 0
        // || this.state.price_max === 0
        // || this.state.mobile_info === ''
        // ){
        //     this.setState({
        //         error_msg: "Please enter required fields",
        //         alert_type: "danger"
        //     })
        //     return false
        // }

        //handles the image upload===============================
        // let pictures = []
        //creates a formData for file upload
        // const formData = new FormData();
        // for(let j=0;j<this.state.pictures.length;j++){
        //     //renames the pictures first
        //     const newName = new Date().getTime() + this.state.pictures[j].name; 
        //     formData.append('demo_images', this.state.pictures[j], newName)
        //     pictures.push(newName);
        // }
        // this.props.uploadImage(this.state.pictures);
        
        //checks for covid health and safety guidelines
        let protocol_approved = false;
        const guideline_1 = this.state.guideline_1 === 'on' ? true : false;
        const guideline_2 = this.state.guideline_2 === 'on' ? true : false;
        const guideline_3 = this.state.guideline_3 === 'on' ? true : false;
        const guideline_4 = this.state.guideline_4 === 'on' ? true : false;
        const guideline_5 = this.state.guideline_5 === 'on' ? true : false;


        if( guideline_1 === true
        || guideline_2 === true
        || guideline_3 === true
        || guideline_4 === true
        || guideline_5 === true
        ){
            protocol_approved = true;
        }

        const safety_guidelines = {
            guideline_1,
            guideline_2,
            guideline_3,
            guideline_4,
            guideline_5
        }

        //creates a json item
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            price_min: this.state.price_min,
            price_max: this.state.price_max,
            mobile_info: this.state.mobile_info,
            email_info: this.state.email_info,
            landlord_check: this.state.landlord_check,
            original_poster: this.props.user.username,
            pictures: this.state.pictures,
            safety_guidelines,
            protocol_approved
        }

        // console.log("newItem")
        console.log(newItem)

        // add item via addEstablishment action
        this.props.addEstablishment(newItem);
        
        // this.setState({
        //     name: '',
        //     location: '',
        //     description: '',
        //     price_min: 0,
        //     price_max: 0,
        //     mobile_info: '',
        //     email_info: '',
        //     landlord_check: null,
        //     error_msg: "Successfully added!",
        //     alert_type: "success",
        //     guideline_1: null,
        //     guideline_2: null,
        //     guideline_3: null,
        //     guideline_4: null,
        //     guideline_5: null
        // });

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

                                {/* ============================================================================= */}
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

                                    {/* ============================================================================= */}
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
                                                    <Form.Control value={this.state.email_info} placeholder="(Optional)" name="email_info" type="Text" onChange={this.onChange} className="form-background"/>
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
                                    {/* ============================================================================= */}
                                    <MDBCardText><h4>COVID-19 Health and Safety Practices</h4></MDBCardText>
                                    <p>Please provide any and all that applies regarding the health and safety protocols that your establishment practices. </p>
                                    <div className="d-flex">
                                        <Form.Check type="checkbox" name="guideline_1" label="" onChange={this.onChange}></Form.Check>
                                        <p>Tenants are required to present a vaccination card.</p>
                                    </div>
                                    <div className="d-flex">
                                        <Form.Check type="checkbox" name="guideline_2" label="" onChange={this.onChange}></Form.Check>
                                        <p>Rooms and facilities undergo enhanced cleaning.</p>
                                    </div>
                                    <div className="d-flex">
                                        <Form.Check type="checkbox" name="guideline_3" label="" onChange={this.onChange}></Form.Check>
                                        <p>Presence of hygiene and sanitation facilities within the establishment such as a hand washing station, soap and water or 70% Isopropyl Alcohol.</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="checkbox" name="guideline_4" label="" onChange={this.onChange}></Form.Check>
                                        <p>Presence of a screening area at the point/s-of-entry with non-contact temperature check.</p>
                                    </div>
                                    <div className="d-flex">
                                        <Form.Check type="checkbox" name="guideline_5" label="" onChange={this.onChange}></Form.Check>
                                        <p>Visual cues or signages to communicate maintaining of physical distance, wearing of masks, proper hygiene etiquette, etc.</p>
                                    </div>

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