import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Stack
} from 'react-bootstrap';

class Gallery extends Component{
    render(){
        return(
            <>
            {/* <Container> */}
            <div className="my-5">
                <Row>
                    <Col>
                        <div>
                            <img src="https://via.placeholder.com/600x350" alt="" />
                            {/* <img src="holder.js/100px180" alt="" /> */}
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
                    {/* <Col>
                        <div>
                            <img src="https://via.placeholder.com/200x350" alt="" />
                        </div>
                    </Col> */}
                </Row>
            </div>
            {/* </Container> */}
            </>
        )
    }
}

export default Gallery;