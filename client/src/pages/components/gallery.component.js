import React, {Component} from 'react';

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
    MDBModalFooter,
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
            <MDBRow>
                <MDBCol className='col-md-8'>
                    { this.props.pictures.length < 1 ?
                            <img
                            className="w-100 gallery-img1"
                                src="../../building_placeholder.jpg"
                                alt="First slide"
                                />
                        :

                        <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
                            <img 
                            className='w-100 gallery-img1'
                            src={`../../uploads/${this.props.pictures[0]}`}
                            />
                            <a onClick={()=>window.open(`../../uploads/${this.props.pictures[0]}`)}>
                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                            </a>
                        </div>
                    }
                    
                </MDBCol>
                <MDBCol className='col-md-4'>
                    <MDBRow className="mb-4">
                        { this.props.pictures.length < 2 ?
                            <img
                                className=" gallery-img2"
                                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="First slide"
                                />
                            :
                            <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
                                <img 
                                    className='w-100 gallery-img2'
                                    src={`../../uploads/${this.props.pictures[1]}`}
                                />
                                <a onClick={()=>window.open(`../../uploads/${this.props.pictures[1]}`)}>
                                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                </a>
                            </div>
                        }
                    </MDBRow>
                    <MDBRow>
                        { this.props.pictures.length < 3 ?
                            <img
                                className=" gallery-img2"
                                src="../../building_placeholder2.jpg"
                                alt="First slide"
                            />
                            :
                            <div class="bg-image ripple" data-mdb-ripple-color="light">
                                <img 
                                    className='w-100 gallery-img2'
                                    src={`../../uploads/${this.props.pictures[2]}`}
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
                                        <ImageList sx={{ width: 800, height: 750 }} cols={3} rowHeight={250} className="gallery-img">
                                            {this.props.pictures.map((pics) => (
                                                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">  
                                                    <ImageListItem>
                                                        <img
                                                            src={`../../uploads/${pics}`}
                                                            loading="lazy"
                                                        />
                                                        <a onClick={()=>window.open(`../../uploads/${pics}`)}>
                                                            <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                                        </a>
                                                    </ImageListItem>
                                                </div>
                                            ))}
                                        </ImageList>
                                        </MDBModalBody>
                                    </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                            </div>
                        }
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </div>

            </>
        )
    }
}

export default Gallery;