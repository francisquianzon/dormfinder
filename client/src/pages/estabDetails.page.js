import React, {Component, useEffect, useState} from 'react';
// import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link, useParams, useLocation, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment, getDetails } from '../actions/establishmentActions';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estab = useLocation();
      console.log(estab)
    //   const estabName = useParams();
      return <Component {...props} estab={estab}/>;
    }
  }

class EstabDetails extends Component{
// function EstabDetails(){

    getEstablishmentDetails(id){
      this.props.getDetails(id);
    }

    componentDidMount() {
      this.getEstablishmentDetails(this.props.estab.state.estab_id)
    }


    render(){
        // this.getEstablishmentDetails(this.props.estab.state.estab_id)
        const establishments  = this.props.establishment.item;
        console.log("HERE")
        console.log(establishments)

        const name = establishments.name
        const id = establishments._id
        const desc = establishments.description
        const price = establishments.price

        // const name = this.props.estab.state.estab_name
        // const id = this.props.estab.state.estab_id
        // const desc = this.props.estab.state.estab_deet
        // const price = this.props.estab.state.price
        
        return(
            <>
            <Navbar/>
            <Container>
                <h1>{name}</h1> 
                <h3>ID: {id}</h3>
                <h3>Price: {price}</h3>
                <h3>Description:</h3>
                <p>{desc}</p>
            </Container>
            </>
        )
    }
}

EstabDetails.propTypes = {
  getEstablishmentDetails: PropTypes.func.isRequired,
  establishment: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  establishment: state.establishment
});

// export default locationHook(EstabDetails);

export default connect(mapStateToProps, {getDetails})(locationHook(EstabDetails));
// export default EstabDetails;