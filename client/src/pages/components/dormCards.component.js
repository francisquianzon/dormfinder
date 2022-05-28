import React, {Component} from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../../actions/establishmentActions';
import Delayed from './delayed';

import { 
    Button,
    Row,
    Col,
    Placeholder,
    Card
} from 'react-bootstrap'

import {
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle,
    MDBCardText, 
    MDBCardImage, 
} from 'mdb-react-ui-kit';


class EstabCard extends Component{
        // state = {
        //     pageNumber: 0,
        //     remainder: 0,
        //     currentPage: 0,
        //     placeholder: true,
        //     breakpoints: [],
        //     breakpoints_loading: true
        // }
        
        // updatePageNumber(contentLength){
        //     let pages = 0;
        //     let page_remainder = 0;

        //     if(contentLength > 8){
        //         pages = Math.floor(contentLength/8)
        //         page_remainder = contentLength % 8
        //     }

        //     if(page_remainder > 0){
        //         pages += 1
        //     }

        //     this.setState({
        //         pageNumber: pages,
        //         remainder: page_remainder
        //     })
        // }

        // showPlaceholder(){
        //     this.setState({
        //         placeholder: false
        //     })
        // }

        // componentDidMount() {
        //     // this.updatePageNumber(this.props.establishment.establishments.length)
        //     // this.createBreakPoints();
        // }
        

        render(){
            const { establishments } = this.props.establishment;

            return(
                <>
                    <br></br>
                        <Row xs={1} md={4} className="g-3">
                            {establishments.map((estabs)=>(
                                <Col key={estabs._id} className="dormcard">
                                    <MDBCard >
                                        {estabs.pictures.length > 0 ? 
                                        <MDBCardImage position="top" src={`../../uploads/${estabs.pictures[0]}`} className="card-establishment-img"/>
                                        :
                                        <MDBCardImage position="top" src="../../building_placeholder2.jpg" className="card-establishment-img"/>
                                        }
                                        <MDBCardBody>
                                        
                                        <MDBCardTitle><p className="dormcard-title">{estabs.name}</p></MDBCardTitle>
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
                </>
            )
        }
}


const mapStateToProps = (state) => ({
    establishment: state.establishment
});


export default connect(mapStateToProps, {getEstablishments,deleteEstablishment})(EstabCard);