import React, { Component } from 'react';
import {
    Container,
    Card,
    Form,
    Button,
    Alert
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';


class RegisterCard extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
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

        const { name, username, email, password } = this.state;

        //Create a user object
        const newUser = {
            name,
            username,
            email,
            password
        }

        this.props.register(newUser);
        // window.location.reload(false);
    }
    
    render(){
        console.log(this.props.isAuthenticated)
        return(
            <>
            <br></br>
            <Container>
            { this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null }
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Sign up</Card.Title>
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
            </Container>
            </>
        )
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{ register })(RegisterCard);