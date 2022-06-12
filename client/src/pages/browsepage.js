import React, { useState, useEffect } from 'react';
import './components/components.css';
import {
    Container,
    Placeholder,
    Card,
    Form,
    InputGroup,
    Row,
    Col,
} from 'react-bootstrap';

import {
    MDBCard, 
    MDBCardBody, 
    MDBCardImage,
} from 'mdb-react-ui-kit';


import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEstablishments, getEstablishmentBySearch } from '../actions/establishmentActions';

import Navbar from './components/navbar.component';
import DormCards from './components/dormCards.component';
import Pagination from './components/pagination.component';


function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function CardPlaceholder(){
    const cardLength = [1,2,3,4];

    return(
        <>
        <br></br>
        <Row xs={1} md={4} className="g-3">
            {cardLength.map((number)=> (
            <Col className="dormcard">
                <MDBCard style={{ minWidth: '15rem', width: "20rem" }}>
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
            </Col>
            ))}
        </Row>

        </>
    )
}

const Browse = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const query = useQuery();
    
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    const { loading } = useSelector((state) => state.establishment);
    const [search, setSearch] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [ placeholder, setPlaceholder] = useState(true);


    const submitQuery = () => {
        if(search.trim()){
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
        // dispatch(getEstablishments());

        const timer = setTimeout(() => setPlaceholder(false), 1500);
        return () => clearTimeout(timer);
    }, []);
    
    console.log(loading)
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
                        {/* <Col></Col> */}
                        {!searchQuery && 
                            <Col className="d-flex justify-content-center">
                                <Pagination state={{page: page, type: 'browse'}}/>
                            </Col>
                        }
                        {/* <Col></Col> */}
                    </Row>
                    <br></br>
                </div>
                }
            </Container>
        </>
    )
}

export default Browse;