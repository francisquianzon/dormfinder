import React, { Component } from 'react';
import './components.css'
import { connect } from 'react-redux';
import {  getDetails } from '../../actions/establishmentActions';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';


import { ImMobile2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

class Details extends Component{
    state = {
    loading: true
    }

    render(){
        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="border-bottom">
                            <h1 className="detail-title-text">{this.props.item.name}</h1>
                            <h1 className="detail-sub-text">Located {this.props.item.location}</h1>
                            <h1 className="detail-sub-text">Rent starts at P{this.props.item.price_min}</h1>
                            <br></br>
                        </div>

                        <br></br>
                        <h3>Description </h3>
                        <div className="display-linebreak">
                            <p>{this.props.item.description}</p>
                        </div>
                    </Col>
                    <br></br>
                    <Col xs={6} md={4}>
                        <Row>
                            <MDBCard className="d-flex justify-content-center">
                                <MDBCardBody>
                                    <MDBCardTitle>Posted by {this.props.item.original_poster}</MDBCardTitle>
                                    <br></br>
                                    <h4>Contact Information</h4>
                                    <h6><ImMobile2/> {this.props.item.mobile_info}</h6>

                                    { this.props.item.email_info &&
                                    <h6><HiOutlineMail/> {this.props.item.email_info}</h6>
                                    }
                                </MDBCardBody>
                            </MDBCard>
                        </Row>
                        <br></br>
                        <Row>
                            <MDBCard className="d-flex justify-content-center">
                                <MDBCardBody>
                                    <MDBCardTitle>Health and Safety</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard> 
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.establishment.item
}); 


export default connect(mapStateToProps, { getDetails })(Details);