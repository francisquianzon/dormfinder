import React, { Component, useState, useEffect } from 'react';
import {
    Container,
    Placeholder,
    Card,
} from 'react-bootstrap';

import {
    MDBCard, 
    MDBCardBody, 
    MDBCardImage,
    MDBBtn 
} from 'mdb-react-ui-kit';

import {
    Paper,
    TextField
} from '@mui/material';

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

const Browse = () =>{
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const navigate = useNavigate();
    const loaded = false;
    const { establishments } = useSelector((state) => state.establishment)

    const submitQuery = () => {
        if(search.trim()){
            console.log("Submitting Query...");
            console.log(search)
            dispatch(getEstablishmentBySearch({search}));
            // navigate(`/posts/search?searchQuery=${search}`)
            // loaded = true
        }
    }
    
    useEffect(() => {
        if(loaded){
            navigate(`/posts/search?searchQuery=${search}`)
        }
    })

    console.log("Printing establishments...")
    console.log(establishments)
    return(
        <>
            <Navbar/>
            <Container>
                <br></br>
                <TextField name="search" variant="outlined" label="Search Memories" value={search} onChange={(e) => setSearch(e.target.value)} />
                <MDBBtn onClick={submitQuery()}>Search</MDBBtn>
                <br></br>
                <h2>Dorms</h2>
                {/* {this.state.placeholder ? <CardPlaceholder/> : <DormCards/>} */}
                {/* <Paper elevation={6}> */}
                    <Pagination/>
                {/* </Paper> */}
            </Container>
        </>
    )
}

export default Browse;