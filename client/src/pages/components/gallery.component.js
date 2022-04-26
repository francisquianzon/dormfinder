import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Stack,
    Carousel
} from 'react-bootstrap';

class Gallery extends Component{
    render(){
        return(
            <>
            {/* <Container> */}
            <div className="my-5 gallery-div">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-placeholder"
                        src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        // src="https://via.placeholder.com/600x200"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <Row>
                    <Col>
                        <div>
                            <img src="https://via.placeholder.com/600x350" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <Row>
                                <div>
                                    <img src="https://via.placeholder.com/400x167" alt="" />
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <img src="https://via.placeholder.com/400x167" alt="" />
                                </div>
                            </Row>
                        </Stack>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://via.placeholder.com/200x350" alt="" />
                        </div>
                    </Col>
                </Row> */}
            </div>
            {/* </Container> */}
            </>
        )
    }
}

export default Gallery;