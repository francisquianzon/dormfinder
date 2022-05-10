import React, { Component } from 'react';
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Name</Form.Label>
                                        <Form.Control name="name" type="Text" onChange={this.onChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Username</Form.Label>
                                        <Form.Control name="username" type="Text"  onChange={this.onChange}/>
                                        <Form.Text className="text-muted">
                                        This will serve as your display name in postings and reviews.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Email</Form.Label>
                                        <Form.Control name="email" type="email" onChange={this.onChange}/>
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Password</Form.Label>
                                        <Form.Control name="password" type="password" onChange={this.onChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Confirm Password</Form.Label>
                                        <Form.Control name="confirm_password" type="password" onChange={this.onChange}/>
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
            </MDBContainer>
            {/* <Row>
                <Col></Col>
                <Col>
                    { this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null }
                    <Card >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>Sign up</h3></Card.Title>
                        <br></br>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="Text" placeholder="Enter name" onChange={this.onChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="Text" placeholder="Enter your username" onChange={this.onChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter your email" onChange={this.onChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter your password" onChange={this.onChange}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card> 
                </Col>
                <Col></Col>
            </Row> */}
            </>
        )
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{ register, clearErrors })(LoggedInNavigateHook(RegisterCard));