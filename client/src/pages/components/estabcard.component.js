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
    // CardGroup,
    Row,
    Col
} from 'react-bootstrap'


// export default function Card(){
class EstabCard extends Component{
        
        componentDidMount() {
            this.props.getEstablishments();
        }
        
        onDeleteClick = (id) => {
            this.props.deleteEstablishment(id);
            window.location.reload(false);
        }

        render(){
            const { establishments } = this.props.establishment;
            return(
                <>
                    <Container>
                    <br></br>
                        <Row xs={1} md={3} className="g-5">
                            {establishments.map((estabs)=>(
                                <Col key={estabs._id}>
                                <Card className="rounded-top">
                                    <Card.Img variant="top" src="https://via.placeholder.com/700x350" className="rounded-top card-establishment-img"/>
                                    {/* <Card.Img 
                                        variant="top" 
                                        src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                        src="https://via.placeholder.com/700x350"
                                        width="700" 
                                        height="150"
                                        // width="100%"
                                    > */}
                                    {/* </Card.Img> */}
                                    <Card.Body>
                                    
                                    <Card.Title>{estabs.name}</Card.Title>
                                    <Card.Text>
                                        Located {estabs.location}
                                        <br></br>
                                        Rent starts at P{estabs.price}
                                    </Card.Text>
                                        <br></br>
                                        <Link 
                                            to={`/browse/${estabs.name}`} 
                                            state={{ estab_id: estabs._id, estab_name:estabs.name, estab_deet: estabs.description, estab_price: estabs.price }}
                                        >

                                            <Button className="btn-seemore" variant="outline-secondary" size="sm">See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </>
            )
        }
}


const mapStateToProps = (state) => ({
    establishment: state.establishment
});


export default connect(mapStateToProps, {getEstablishments,deleteEstablishment})(EstabCard);