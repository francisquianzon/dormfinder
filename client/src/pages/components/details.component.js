import React, { Component } from 'react';
import './components.css'
import { connect } from 'react-redux';
import {  getDetails } from '../../actions/establishmentActions';

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
    state = {
    loading: true
    }

    getEstablishmentDetails(id){
        this.props.getDetails(id);
    }

    componentDidMount() {
        this.getEstablishmentDetails(this.props.establishment_id)
    }

    render(){

        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <MDBCard>
                        <MDBCardBody>
                            <div className="border-bottom">
                                <h1 className="detail-title-text">{this.props.item.name}</h1>
                                <h1 className="detail-sub-text">Located {this.props.item.location}</h1>
                                <h1 className="detail-sub-text">Rent starts at {this.props.item.price_min}</h1>
                                <br></br>
                            </div>

                            <br></br>
                            <h3>Description </h3>
                            <div className="display-linebreak">
                                <p>{this.props.item.description}</p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    </Col>
                    <Col xs={6} md={4}>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Posted by {this.props.item.original_poster}</MDBCardTitle>
                                <br></br>
                                <h6><ImMobile2/> {this.props.item.mobile_info}</h6>

                                <h6><HiOutlineMail/> {this.props.item.email_info}</h6>
                            </MDBCardBody>
                        </MDBCard>
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