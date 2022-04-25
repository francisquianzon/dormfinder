import React, { Component } from 'react';
import './components.css'
import {
    Container,
    Row,
    Col,
    Stack
} from 'react-bootstrap';

class Details extends Component{
    render(){
        console.log("HERE PROPS")
        
        const {establishment} = this.props.establishment
        console.log(this.props.establishment[2])

        return(
            <>
            <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="title-text">{this.props.establishment[0]}</h1>
                        <h1 className="location-text">Located {this.props.establishment[2]}</h1>
                        <h1 className="price-text">Rent starts at {this.props.establishment[4]}</h1>

                        <br></br>
                        <h3>Description: </h3>
                        <p>{this.props.establishment[3]}</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <h3>Contact card placeholder</h3>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Details;