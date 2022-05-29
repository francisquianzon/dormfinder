import React, {Component} from 'react';
import {
    Container,
    Placeholder,
    Card,
} from 'react-bootstrap';

import {
    MDBCard, 
    MDBCardBody, 
    MDBCardImage, 
} from 'mdb-react-ui-kit';

import {
    Paper
} from '@mui/material';

import { useLocation, useHistory } from 'react-router-dom';
import Navbar from './components/navbar.component';
import DormCards from './components/dormCards.component';
import Pagination from './components/pagination.component';

import { getEstablishments, deleteEstablishment } from '../actions/establishmentActions';
import { connect } from 'react-redux';

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

class BrowsePage extends Component{

    state = {
        placeholder: true
    }

    showPlaceholder(){
        this.setState({
            placeholder: false
        })
    }
    
    componentDidMount(){
        this.props.getEstablishments();
    }

    render(){

        setTimeout(() =>{
            this.showPlaceholder()
        }, 2000);

        return(
            <>
                <Navbar/>
                <Container>
                    <br></br>
                    <h2>Dorms</h2>
                    {this.state.placeholder ? <CardPlaceholder/> : <DormCards/>}
                    {/* <Paper elevation={6}> */}
                    {/* <Pagination/> */}
                    {/* </Paper> */}
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    establishment: state.establishment
});


export default connect(mapStateToProps, {getEstablishments,deleteEstablishment})(BrowsePage);