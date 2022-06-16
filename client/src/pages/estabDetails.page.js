import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getDetails } from '../actions/establishmentActions';
import { getReviews } from '../actions/reviewActions';

import {
  Spinner,
  Row,
  Col,
  Placeholder
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

function GalleryPlaceholder(){
  return(
      <>
        <div className="my-5">
        <Row>
          <Col className='col-md-8'>
            <Placeholder animation="glow">
              <Placeholder className="w-100 gallery-img1"/>
            </Placeholder>
          </Col>
          <Col className='col-md-4'>
            <Row className="mb-4">
            <Placeholder animation="glow">
              <Placeholder className="w-100 gallery-img2"/>
            </Placeholder>
            </Row>
            <Row>
            <Placeholder animation="glow">
              <Placeholder className="w-100 gallery-img2"/>
            </Placeholder>
            </Row>
          </Col>
        </Row>
        </div>
      </>
  )
}

function PageLoading(){
  return(
    <>
    <Container>
      <br></br>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Placeholder animation="glow">
              <Placeholder xs={12}/>
            </Placeholder>
          </Row>
          <Row>
            <Placeholder animation="glow">
              <Placeholder xs={4}/>
            </Placeholder>
          </Row>
          <Row>
            <Placeholder animation="glow">
              <Placeholder xs={4}/>
            </Placeholder>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
} 

class EstabDetails extends Component{
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
        const establishmentitem  = this.props.item;

        setTimeout(() =>{
            this.showPlaceholder()
        }, 3000);

        return(
            <>
            <Navbar/>
              <Container> 
                { this.state.placeholder ? <GalleryPlaceholder/> :
                  <Gallery pictures={establishmentitem.pictures}/>
                }
                { this.props.isLoading ? <PageLoading/> :
                  <>
                    <Details/>
                    <br></br>
                    <Reviews establishment_id={establishmentitem._id}/>
                    <br></br>
                  </>
                }
              </Container>
          </>
        )
    }
}

const mapStateToProps = (state) => ({
  item: state.establishment.item,
  isLoading: state.establishment.loading
});

export default connect(mapStateToProps, { getDetails, getReviews })(locationHook(EstabDetails));