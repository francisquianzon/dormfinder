import React, { useState } from 'react';
import './components/components.css';
import { getEstablishments, getEstablishmentBySearch } from '../actions/establishmentActions';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Row,
    Col,
    Form,
    InputGroup,
    Container
} from 'react-bootstrap';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';


function useQuery(){
    return new URLSearchParams(useLocation().search)
}

// class Homepage extends Component{
const Homepage = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const query = useQuery();
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    
    const submitQuery = () => {
        if(search.trim()){
            navigate(`/browse`);
            dispatch(getEstablishmentBySearch({search}));
            navigate(`/browse/search?searchQuery=${search}`);
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          submitQuery();
        }
      };

    return(
    <>
    <Navbar/>
    <div className="carousel-inner headline mb-5">
        <Container className="headline-search">
            <Row>
                <Col></Col>
                <Col xs={8} className="d-flex justify-content-center">
                    <h3 className="headline-text">The #1 site for searching dorms in UPLB</h3>
                </Col>
                <Col></Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={8} >
                    <InputGroup size="lg">
                    <Form.Control
                        name="search"
                        placeholder="Search"
                        className="search-bar"
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setSearch(e.target.value)}
                        
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    </div>
    <Container >
        <Row xs={1} md={3} className="g-2">
            <Col className="justify-content-center">
                <Row>
                    <Col md={4}>
                        <img src="../../icon-home.svg" alt="..." height="120"></img>
                    </Col>
                    <Col md={8}>
                        <Row><h5>Post your Dorm</h5></Row>
                        <Row><p className="marketing-text">Just create an account and post your dorm with the necessary information.</p></Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col md={4}>
                        <img src="../../icon-review.svg" alt="..." height="120"></img>
                    </Col>
                    <Col md={8}>
                        <Row><h5>Write a Review</h5></Row>
                        <Row><p className="marketing-text">Help other users find the dorm they're looking for by writing a review. All reviews are anonymous.</p></Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col md={4}>
                    <img src="../../icon-search.svg" alt="..." height="120"></img>
                    </Col>
                    <Col md={8}>
                        <Row><h5>Filter and Search</h5></Row>
                        <Row><p className="marketing-text">It is now easier to find the dorm your looking for! With filter and search, you can adjust your search to your preferences.</p></Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    <br></br>
    <Footer/>    
    </>
    )
}

export default Homepage;
