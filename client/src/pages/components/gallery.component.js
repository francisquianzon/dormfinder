import React, {Component} from 'react';

import {
    Row,
    Col
} from 'react-bootstrap'
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
} from 'mdb-react-ui-kit';

import { 
    ImageList,
    ImageListItem
} from '@mui/material';



class Gallery extends Component{
    constructor(){
        super();
        this.state = {
            imageModal: false
        }
    }

    toggleImage = () =>{
        this.setState({
            imageModal: !this.state.imageModal
        })
    }
    
    render(){

        return(
            <>
            <div className="my-5">
            <Row>
                <Col className='col-md-8'>
                    { this.props.pictures.length < 1 ?
                            <img
                            className="w-100 gallery-img1"
                                src="../../building_placeholder.jpg"
                                alt="dorm view"
                                />
                        :

                        <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
                            <img 
                            className='w-100 gallery-img1'
                            // src={`../../uploads/${this.props.pictures[0]}`}
                            src={this.props.pictures[0]}
                            alt="dorm view"
                            />
                            <a 
                            // onClick={()=>window.open(`../../uploads/${this.props.pictures[0]}`)}
                            onClick={()=>window.open(`${this.props.pictures[0]}`)}
                            >
                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                            </a>
                        </div>
                    }
                    
                </Col>
                <Col className='col-md-4'>
                    <Row className="mb-4">
                        { this.props.pictures.length < 2 ?
                            <img
                                className="w-100 gallery-img2"
                                src="https://img.freepik.com/free-vector/student-dormitory-room-with-bunk-bed-laptop-desk-office-chair-bookshelf-vector-cartoon-interior-empty-dorm-bedroom-hostel-apartment-with-wooden-furniture-backpack_107791-9928.jpg?t=st=1655136290~exp=1655136890~hmac=c0e08f60368108ce3b777c339aedee3bd6e7e6bdd16debe4c722f77226dd94cf&w=740"
                                alt="dorm view"
                                />
                            :
                            <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
                                <img 
                                    className='w-100 gallery-img2'
                                    // src={`../../uploads/${this.props.pictures[1]}`}
                                    src={this.props.pictures[1]}
                                    alt="dorm view"
                                />
                                <a onClick={()=>window.open(`${this.props.pictures[1]}`)}>
                                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                </a>
                            </div>
                        }
                    </Row>
                    <Row>
                        { this.props.pictures.length < 3 ?
                            <img
                                className="w-100 gallery-img2"
                                src="../../building_placeholder2.jpg"
                                alt="dorm view"
                            />
                            :
                            <div class="bg-image ripple" data-mdb-ripple-color="light">
                                <img 
                                    className='w-100 gallery-img2'
                                    // src={`../../uploads/${this.props.pictures[2]}`}
                                    src={this.props.pictures[2]}
                                    alt="dorm view"
                                />
                                <a onClick={this.toggleImage}>
                                    <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <p class="text-white mb-0">See more</p>
                                    </div>
                                    </div>
                                    <div class="hover-overlay">
                                    <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                    </div>
                                </a>
                                <MDBModal className="gallery-modal" staticBackdrop tabIndex='-1' show={this.state.imageModal} setShow={this.state.imageModal}>
                                    <MDBModalDialog size="lg">
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                        <MDBModalTitle>Gallery</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={this.toggleImage}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody className="d-flex">
                                        { this.props.pictures.length > 6 ?
                                            <ImageList sx={{ width: 800, height: 750 }} cols={3} rowHeight={250}>
                                                {this.props.pictures.map((pics) => (
                                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">  
                                                        <ImageListItem>
                                                            <img
                                                                // src={`../../uploads/${pics}`}
                                                                src={pics}
                                                                loading="lazy"
                                                                className="gallery-img"
                                                                alt="dorm view"
                                                            />
                                                            <a onClick={()=>window.open(`${pics}`)}>
                                                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                                            </a>
                                                        </ImageListItem>
                                                    </div>
                                                ))}
                                            </ImageList>
                                        :
                                            <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={450}>
                                                {this.props.pictures.map((pics) => (
                                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">  
                                                        <ImageListItem>
                                                            <img
                                                                // src={`../../uploads/${pics}`}
                                                                src={pics}
                                                                loading="lazy"
                                                                className="gallery-img"
                                                                alt="dorm view"
                                                            />
                                                            <a onClick={()=>window.open(`${pics}`)}>
                                                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                                            </a>
                                                        </ImageListItem>
                                                    </div>
                                                ))}
                                            </ImageList>           
                                        }
                                        </MDBModalBody>
                                    </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                            </div>
                        }
                    </Row>
                </Col>
            </Row>
            </div>

            </>
        )
    }
}

export default Gallery;