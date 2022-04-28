import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getDetails } from '../actions/establishmentActions';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';
import Gallery from './components/gallery.component';
import Details from './components/details.component';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estab = useLocation();
      return <Component {...props} estab={estab}/>;
    }
  }

class EstabDetails extends Component{
// function EstabDetails(){
    state = {
      loading: true
    }

    getEstablishmentDetails(id){
      this.props.getDetails(id);
    }

    componentDidMount() {
      this.getEstablishmentDetails(this.props.estab.state.estab_id)
    }


    render(){

        // this.getEstablishmentDetails(this.props.estab.state.estab_id)
        const establishmentitem  = this.props.item;
        
        const name = establishmentitem.name
        const id = establishmentitem._id
        const loc = establishmentitem.location
        const desc = establishmentitem.description
        const price = establishmentitem.price
        
        const item = [name, id, loc, desc, price]

        return(
            <>
            <Navbar/>
            <Container>
              <Gallery/>
                <Details establishment={item}/>
            </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  item: state.establishment.item
});

// export default locationHook(EstabDetails);

export default connect(mapStateToProps, {getDetails})(locationHook(EstabDetails));
// export default EstabDetails;