import React, { Component, useState, useEffect } from 'react';
import {
    Container,
    Placeholder,
    Card,
    Form,
    InputGroup,
    Button,
    Row,
    Col,
    CloseButton
} from 'react-bootstrap';

import {
    MDBCard, 
    MDBCardBody, 
    MDBCardImage,
    MDBBtn,
} from 'mdb-react-ui-kit';

import {
    Paper,
    TextField
} from '@mui/material';
import { BiSearch } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEstablishments, deleteEstablishment, getEstablishmentBySearch } from '../actions/establishmentActions';
import { connect } from 'react-redux';

import Navbar from './components/navbar.component';
import DormCards from './components/dormCards.component';
import Pagination from './components/pagination.component';


function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function CardPlaceholder(){
    return(
        <>
        <MDBCard show={false} style={{ minWidth: '15rem', width: "20rem" }}>
            <MDBCardImage position="top" variant="top" src="../../building_placeholder.jpg" className="card-establishment-img" />
            <MDBCardBody>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            </MDBCardBody>
        </MDBCard>

        </>
    )
}

const Browse = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const query = useQuery();
    
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const loaded = false;
    
    const { establishments } = useSelector((state) => state.establishment)
    const [search, setSearch] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [ placeholder, setPlaceholder] = useState(true);


    const submitQuery = () => {
        if(search.trim()){
            console.log("Submitting Query...");
            console.log(search)
            dispatch(getEstablishmentBySearch({search}));
            navigate(`/browse/search?searchQuery=${search}`)
        }else{
            dispatch(getEstablishments());
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          submitQuery();
        }
      };
    
    useEffect(() => {
        dispatch(getEstablishments());

        
        const timer = setTimeout(() => setPlaceholder(false), 1500);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <>
            <Navbar/>
            <Container>
                <br></br>
                <Row>
                    <Col><h2>Dorms</h2></Col>
                    <Col xs={6} className="d-flex justify-content-center float-end">
                        <InputGroup size="lg">
                        <Form.Control
                            name="search"
                            placeholder="Search"
                            className="search-bar"
                            onKeyDown={handleKeyPress}
                            onChange={(e) => setSearch(e.target.value)}
                            
                            />
                        {/* <MDBBtn onClick={submitQuery}>Search</MDBBtn> */}
                        </InputGroup>
                    </Col>
                </Row>
                {/* <br></br> */}
                {placeholder ? <CardPlaceholder/> :
                <div>
                    <DormCards/>
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col className="d-flex justify-content-center">
                            <Pagination page={page}/>
                        </Col>
                        <Col></Col>
                    </Row>
                    <br></br>
                </div>
                }
            </Container>
        </>
    )
}

export default Browse;