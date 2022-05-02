import React, { Component } from 'react';
import './components.css';
import {
    Container,
    Card,
    Form,
    Button,
    Alert,
    Row,
    Col
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

import { useNavigate, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function LoggedInNavigateHook(Component){
    return function WrappedComponent(props) {
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate}/>;
    }
}

class LoginCard extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    //check for errors using previous props
    componentDidUpdate(prevProps){
        const { error } = this.props;
        if(error !== prevProps.error){
            //Check for register error
            if(error.id == 'LOGIN_FAIL'){
                this.setState({ msg: error.msg.msg });
            }else{
                this.setState({ msg: null });
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

        const { email, password } = this.state;

        const user = {
            email,
            password
        }
        
        //attempt to login
        this.props.login(user);

        //if there are no errors, redirect to homepage
        setTimeout(() =>{
            if(this.state.msg == null && this.props.isAuthenticated){
                this.props.navigate('/');
            }
        }, 500);

        
    }
    
    render(){
        return(
            <>
            <br></br>
            <br></br>
            <MDBContainer>
                <MDBRow className="row-bottom-margin">
                    {/* <MDBCol></MDBCol> */}
                    <MDBCol className="d-flex justify-content-center"><h4 className="login-title-text">Login to DormFinder</h4></MDBCol>
                    {/* <MDBCol></MDBCol> */}
                </MDBRow>
                <MDBRow>
                    {/* <MDBCol></MDBCol> */}
                    <MDBCol className="d-flex justify-content-center">
                        <MDBCard style={{ width: '25rem' }}>
                            <MDBCardBody>
                                {/* <MDBCardTitle>Login</MDBCardTitle> */}
                                <br></br>
                                { this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null }
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label size="sm">Email</Form.Label>
                                        <Form.Control name="email" type="email" onChange={this.onChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label size="sm">Password</Form.Label>
                                        <Form.Control name="password" type="password" onChange={this.onChange}/>
                                    </Form.Group>
                                    <br></br>
                                    <MDBBtn className="btn-wide" variant="primary" type="submit">Login</MDBBtn>
                                    <p className="mt-2 text-center">
                                        Not a user?
                                        <Link to="/register" state={{ type: true}}>
                                            <a href=''> Register</a>
                                        </Link> 
                                        </p>
                                </Form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    {/* <MDBCol></MDBCol> */}
                </MDBRow>
            </MDBContainer>
            </>
        )
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{ login, clearErrors })(LoggedInNavigateHook(LoginCard));