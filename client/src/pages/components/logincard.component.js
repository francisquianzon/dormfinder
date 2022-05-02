import React, { Component } from 'react';
import {
    Container,
    Card,
    Form,
    Button,
    Alert,
    Row,
    Col
} from 'react-bootstrap';
import { useNavigate, Route } from "react-router-dom";
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
                this.props.navigate('/');
            }
        }
    }

    //set values obtained from the forms to state attributes
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        }
        
        //attempt to login
        this.props.login(user);
        console.log("logging in yay...")
        console.log(this.state.msg)

        if(this.state.msg == null){
            console.log("logged in yay!!...")
        }
    }
    
    render(){
        return(
            <>
            <br></br>
            <Row>
                <Col></Col>
                <Col>
                    { this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null }
                    <Card >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>Login</h3></Card.Title>
                        <br></br>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter your email" onChange={this.onChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter your password" onChange={this.onChange}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card> 
                </Col>
                <Col></Col>
            </Row>
            </>
        )
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{ login, clearErrors })(LoggedInNavigateHook(LoginCard));