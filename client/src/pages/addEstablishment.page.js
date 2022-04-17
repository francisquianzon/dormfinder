import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { addEstablishment } from '../actions/establishmentActions';

import Navbar from './components/navbar.component';

class AddEstablishment extends Component{
    //initialize state attributes
    state = {
        name: '',
        location: '',
        description: '',
        price: 0,
    }

    //set values obtained from the forms to state attributes
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit = e => {
        e.preventDefault();
        
        if(this.state.name == '' || this.state.location == '' || this.state.description == '' || this.state.price == 0){
            alert("All fields are required");
            return false
        }
        //creates a json item
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            price: this.state.price
        }

        // add item via addEstablishment action
        this.props.addEstablishment(newItem);
        //reloads the window
        window.location.reload(false);
    }

    render(){
        return(
            <>
            <Navbar/>
            <br></br>
            <Container>
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Add an Establishment</Card.Title>
                    {/* <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="Text" placeholder="Enter name of establishment" onChange={this.onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control name="location" type="Text" placeholder="Enter the address of the Establishment" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" as="textarea" type="Text" placeholder="Enter a description" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price Range</Form.Label>
                            <Form.Control name="price" type="Number" placeholder="Enter the price" onChange={this.onChange}/>
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
    establishment: state.establishment
})

export default connect(mapStateToProps, { addEstablishment })(AddEstablishment);