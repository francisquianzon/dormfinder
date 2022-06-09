import React, { Component } from 'react';
import './components.css'
import { connect } from 'react-redux';
import {  getDetails } from '../../actions/establishmentActions';
import Delayed from '../components/delayed'

import {
    Container,
    Row,
    Col,
    Nav
} from 'react-bootstrap';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';

import { ImMobile2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';
import { AiOutlineIdcard } from 'react-icons/ai';
import { GiWaterBottle } from 'react-icons/gi';
import { FaTemperatureLow } from 'react-icons/fa';
import { RiSurgicalMaskLine } from 'react-icons/ri';


function OshGuidelines(){
    return(
        <Row>
            <MDBCard className="d-flex justify-content-center">
                <MDBCardBody>
                    <MDBCardTitle><h4>Health and Safety</h4></MDBCardTitle>
                    <h6>Certified for COVID-19 Health and Safety Practices</h6>
                    <p>This establishment adheres to the COVID-19 Policies and Safety Practices set by the UPLB Office of Student Housing</p>
                    <br></br>
                    <p className="write-a-review">Learn more</p>
                </MDBCardBody>
            </MDBCard> 
        </Row>
    )
}

function ProtocolGuidlines(props){
    console.log(props.state.protocol_check)
    return(
        <>
        <Row>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle><h4>Health and Safety</h4></MDBCardTitle>
                    <h6>This establishment is following COVID-19 Health and Safety Practices to ensure that risk of exposure is reduced.</h6>
                    <br></br>
                    { props.state.protocol_check.guideline_1 && 
                        <Col className="d-flex">
                            <div className="">
                                <AiOutlineIdcard/>
                            </div>
                            <p className="mx-3"> Tenants are required to present a vaccination card. </p>
                        </Col>
                    }
                    { props.state.protocol_check.guideline_2 && 
                        <Col className="d-flex">
                            <div>
                                <BsStars/>
                            </div>
                            <p className="mx-3"> Rooms and facilities undergo enhanced cleaning. </p>
                        </Col>
                    }
                    { props.state.protocol_check.guideline_3 && 
                        <Col className="d-flex">
                            <div>
                                <GiWaterBottle/>
                            </div>
                            <p className="mx-3"> Presence of hygiene and sanitation facilities within the establishment such as a hand washing station, soap and water or 70% Isopropyl Alcohol. </p>
                        </Col>
                    }
                    { props.state.protocol_check.guideline_4 && 
                        <Col className="d-flex">
                            <div>
                                <FaTemperatureLow/>
                            </div>
                            <p className="mx-3"> Presence of a screening area at the point/s-of-entry with non-contact temperature check. </p>
                        </Col>
                    }
                    { props.state.protocol_check.guideline_5 && 
                        <Col className="d-flex">
                            <div>
                                <RiSurgicalMaskLine/>
                            </div>
                            <p className="mx-3"> Visual cues or signages to communicate maintaining of physical distance, wearing of masks, proper hygiene etiquette, etc. </p>
                        </Col>
                    }

                </MDBCardBody>
            </MDBCard>
        </Row>
        </>
    )
}

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
                    <Col>
                        {/* <Row> */}
                            <MDBCard>
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
                        {/* </Row> */}
                        <br></br>
                        { this.props.item.protocol_approved &&
                        <Delayed waitBeforeShow={1000}>
                            <ProtocolGuidlines state={{ protocol_check: this.props.item.safety_guidelines}}/>
                        </Delayed>
                        } 
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