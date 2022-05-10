import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Stack,
    Carousel
} from 'react-bootstrap';

import {
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

class Gallery extends Component{
    render(){
        return(
            <>
            <div className="my-5">
            <MDBRow>
                <MDBCol className='col-md-8'>
                    <img
                        className="w-100 gallery-img1"
                        // src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        src="../../building_placeholder.jpg"
                        alt="First slide"
                        />
                </MDBCol>
                <MDBCol className='col-md-4'>
                    <MDBRow className="mb-4">
                        <img
                            className=" gallery-img2"
                            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            // src="../../building_placeholder.jpg"
                            alt="First slide"
                            />
                    </MDBRow>
                    <MDBRow>
                        <img
                            className=" gallery-img2"
                            // src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            src="../../building_placeholder2.jpg"
                            alt="First slide"
                            />
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </div>

            </>
        )
    }
}

export default Gallery;