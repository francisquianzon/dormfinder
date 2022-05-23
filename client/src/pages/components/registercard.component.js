import React, { Component } from 'react';
import './components.css'
import {
    Form,
    Alert,
} from 'react-bootstrap';

import { MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBContainer,
} from 'mdb-react-ui-kit';

import { connect } from 'react-redux';
import { useNavigate, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function LoggedInNavigateHook(Component){
    return function WrappedComponent(props) {
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate}/>;
    }
}

class RegisterCard extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
    }

    //check for errors using previous props
    componentDidUpdate(prevProps){
        const { error } = this.props;
        if(error !== prevProps.error){
            //Check for register error
            if(error.id == 'REGISTER_FAIL'){
                this.setState({ msg: error.msg.msg });
            }else{
                this.setState({ msg: null })
            }
        }
    }

    //set values obtained from the forms to state attributes
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        //clear errors
        this.props.clearErrors();
        const { name, username, email, password, confirm_password } = this.state;
        
        if(confirm_password != password){
            return alert("Password does not match!");
        }

        //Create a user object
        const newUser = {
            name,
            username,
            email,
            password
        }

        //attempt to register user
        this.props.register(newUser);

        console.log(this.state.msg);
        console.log(this.props.isAuthenticated)

        //if there are no errors, redirect to homepage
        setTimeout(() =>{
            if(this.state.msg == null && this.props.isAuthenticated){
                this.props.navigate('/');
            }
        }, 1000);
    }
    
    render(){
        return(
            <>
            <br></br>
            <div className="sign-up-page">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="d-flex justify-content-center">
                            <MDBCard style={{ width: '33rem' }}>
                                <MDBCardBody>
                                    <br></br>
                                    <MDBRow className="row-bottom-margin">
                                        <MDBCol className="d-flex">
                                            <h3>Sign Up. </h3>
                                            <p className="text-muted mt-2 mx-2"> Its quick and easy.</p>
                                            </MDBCol>
                                    </MDBRow>
                                    <br></br>
                                    { this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null }
                                    <Form onSubmit={this.onSubmit}>
                                        <Form.Group className="form-margins" controlId="formBasicEmail">
                                            {/* <Form.Label size="sm">Name</Form.Label> */}
                                            <Form.Control size="lg" name="name" placeholder='Name' type="Text" onChange={this.onChange} className="sg-form-background" />
                                        </Form.Group>

                                        <Form.Group className="form-margins" controlId="formBasicEmail">
                                            {/* <Form.Label size="sm">Username</Form.Label> */}
                                            <Form.Control size="lg" name="username" placeholder='Username' type="Text"  onChange={this.onChange} className="sg-form-background"/>
                                            <Form.Text className="text-muted">
                                            This will serve as your display name in postings and reviews.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="form-margins" controlId="formBasicEmail">
                                            {/* <Form.Label size="sm">Email</Form.Label> */}
                                            <Form.Control size="lg" name="email" type="email" placeholder='Email'onChange={this.onChange} className="sg-form-background"/>
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="form-margins" controlId="formBasicEmail">
                                            {/* <Form.Label size="sm">Password</Form.Label> */}
                                            <Form.Control size="lg" name="password" type="password" placeholder='Password' onChange={this.onChange} className="sg-form-background"/>
                                        </Form.Group>

                                        <Form.Group className="form-margins" controlId="formBasicEmail">
                                            {/* <Form.Label size="sm">Confirm Password</Form.Label> */}
                                            <Form.Control size="lg" name="confirm_password" type="password" placeholder='Confirm Password' onChange={this.onChange} className="sg-form-background"/>
                                            <Form.Text className="text-muted">
                                            Please confirm your password.
                                            </Form.Text>
                                        </Form.Group>

                                        <br></br>
                                        <MDBBtn className="btn-wide" variant="primary" type="submit">Sign Up</MDBBtn>
                                        <p className="mt-2 text-center">
                                            Already registered? 
                                            <Link to="/login" state={{ type: false}}>
                                                <a href=''> Sign in</a>
                                            </Link> 
                                            </p>
                                        <br></br>
                                    </Form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br></br>
                </MDBContainer>
            </div>
            </>
        )
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{ register, clearErrors })(LoggedInNavigateHook(RegisterCard));