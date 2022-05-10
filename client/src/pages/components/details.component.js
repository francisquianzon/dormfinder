import React, { Component } from 'react';
import './components.css'
import {
    Container,
    Row,
    Col,
    // Stack
} from 'react-bootstrap';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdb-react-ui-kit';

import { ImMobile2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

class Details extends Component{
    render(){      
        const {establishment} = this.props.establishment
        console.log(this.props.establishment);
        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <MDBCard>
                        <MDBCardBody>
                            <div className="border-bottom">
                                <h1 className="detail-title-text">{this.props.establishment[0]}</h1>
                                <h1 className="detail-sub-text">Located {this.props.establishment[2]}</h1>
                                <h1 className="detail-sub-text">Rent starts at {this.props.establishment[4]}</h1>
                                <br></br>
                            </div>

                            <br></br>
                            <h3>Description </h3>
                            <div className="display-linebreak">
                                <p>{this.props.establishment[3]}</p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    </Col>
                    <Col xs={6} md={4}>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Posted by {this.props.establishment[7]}</MDBCardTitle>
                                <br></br>
                                {/* <h1 className="detail-sub-text">Mobile</h1> */}
                                <h6><ImMobile2/> {this.props.establishment[5]}</h6>

                                {/* <h1 className="detail-sub-text">Email</h1> */}
                                <h6><HiOutlineMail/> {this.props.establishment[6]}</h6>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Details;