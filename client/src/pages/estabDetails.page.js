import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getDetails } from '../actions/establishmentActions';
import { getReviews } from '../actions/reviewActions';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button'

import {
  Spinner
} from 'react-bootstrap';

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar.component';
import Gallery from './components/gallery.component';
import Details from './components/details.component';
import Reviews from './components/reviews.component';
import Delayed from './components/delayed';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estab = useLocation();
      return <Component {...props} estab={estab}/>;
    }
  }

function ContentPlaceholder(){
  return(
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
  )
}

class EstabDetails extends Component{
// function EstabDetails(){
    state = {
      loading: true,
      isMounted: false,
      placeholder: true
    }

    getEstablishmentDetails(id){
      this.props.getDetails(id);
    }

    getReviewDetails(id){
      this.props.getReviews(id);
    }


    componentDidMount() {
      this.getEstablishmentDetails(this.props.estab.state.estab_id);
      this.getReviewDetails(this.props.estab.state.estab_id)
    }

    showPlaceholder(){
      this.setState({
          placeholder: false
      })
   }


    render(){
        // this.getEstablishmentDetails(this.props.estab.state.estab_id)
        const establishmentitem  = this.props.item;

        setTimeout(() =>{
            this.showPlaceholder()
        }, 2000);

        return(
            <>
            <Navbar/>
              <Container> 
                <Delayed waitBeforeShow={1000}>
                  <Gallery pictures={this.props.item.pictures}/>
                </Delayed>
                <Details/>
                <br></br>
                <Reviews establishment_id={establishmentitem._id}/>
                <br></br>
              </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  item: state.establishment.item
});

// export default locationHook(EstabDetails);

export default connect(mapStateToProps, { getDetails, getReviews })(locationHook(EstabDetails));
// export default EstabDetails;