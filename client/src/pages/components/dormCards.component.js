import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../../actions/establishmentActions';

import { 
    Container, 
    // Stack,
    Card,
    Button,
    CardGroup,
    Row,
    Col
} from 'react-bootstrap'

import {
    MDBRow,
    MDBCol,
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle,
    MDBCardText, 
    MDBCardImage, 
    MDBBtn
} from 'mdb-react-ui-kit';


// export default function Card(){
class EstabCard extends Component{
        
        componentDidMount() {
            this.props.getEstablishments();
        }

        render(){
            const { establishments } = this.props.establishment;
            return(
                <>
                    {/* <Container> */}
                    <br></br>
                        <Row xs={1} md={4} className="g-3">
                            {establishments.map((estabs)=>(
                                <Col key={estabs._id} className="dormcard">
                                    <MDBCard >
                                        <MDBCardImage position="top" src="../../building_placeholder.jpg" className="card-establishment-img"/>
                                        <MDBCardBody>
                                        
                                        <MDBCardTitle>{estabs.name}</MDBCardTitle>
                                        <MDBCardText>
                                            <div className="dorm-card-text">
                                                {estabs.location}
                                                <br></br>
                                                Rent starts at P{estabs.price_min}
                                                </div>
                                        </MDBCardText>

                                            <Link 
                                                to={`/browse/${estabs.name}`} 
                                                state={{ 
                                                    estab_id: estabs._id, 
                                                    estab_name: estabs.name, 
                                                    estab_deet: estabs.description, 
                                                    estab_price: estabs.price_min 
                                                }}
                                            >
                                            
                                                <Button size="sm">See more</Button>
                                            </Link>

                                        </MDBCardBody>
                                    </MDBCard>
                                </Col>
                            ))}
                        </Row>


                    {/* </Container> */}
                </>
            )
        }
}


const mapStateToProps = (state) => ({
    establishment: state.establishment
});


export default connect(mapStateToProps, {getEstablishments,deleteEstablishment})(EstabCard);