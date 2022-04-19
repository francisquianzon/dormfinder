import React, {Component, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import './components.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../../actions/establishmentActions';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'

import AddEstab from '../../pages/addEstablishment.page';

// export default function Card(){
class Card extends Component{
        // const [establishmentsList, setEstablishmentList] = useState([])

        // useEffect(() =>{
        //     axios.get('http://localhost:5000/establishments').then((allEstablishment) => {
        //         setEstablishmentList(allEstablishment.data);
        //     })
        //   }, [])

        // constructor() {
        //     super();
        //     axios.get('http://localhost:5000/establishments').then(res => {
        //         console.log(res.data)
        //     })
        // }
        
        componentDidMount() {
            this.props.getEstablishments();
        }
        
        onDeleteClick = (id) => {
            this.props.deleteEstablishment(id);
            window.location.reload(false);
        }

        render(){
            // const auth = useSelector(state => state.establishment);
            const { establishments } = this.props.establishment;
            // console.log("HELLO");
            // console.log(this.props);

            return(
                <>
                    <Container>
                    <br></br>
                    <h2>Establishments</h2>
                        <Link to="addestablishment">
                            <Button variant="primary">Add Establishment</Button>
                        </Link>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>More</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {establishments.map((estabs) =>(
                                <tr key={estabs._id}
                                >
                                    <td align="left">{estabs.name}</td>
                                    <td align="center">{estabs.location}</td>
                                    <td align="center">{estabs.description}</td>
                                    <td align="center">{estabs.price}</td>
                                    <td align="center">
                                        <Link to={`/browse/e/${estabs.name}`} state={{ estab_id: estabs._id}}
                                        >
                                            <button type="button" className="btn btn-outline-secondary me-2 btn-sm">See more</button>
                                        </Link>
                                    </td>
                                    <td align="center">
                                        <button type="button" className="btn btn-outline-danger me-2 btn-sm" onClick={this.onDeleteClick.bind(this,estabs._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                        </svg>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary me-2 btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                        </svg>
                                        </button>
                                    </td>
                                </tr>

                            ))}                       
                        </tbody>
                        </Table>
                    </Container>
                    {/* <Routes>
                        <Route path='/browse/addestablishment'><AddEstab/></Route>
                    </Routes> */}
                </>
            )
        }
}


Card.propTypes = {
    getEstablishments: PropTypes.func.isRequired,
    establishment: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    establishment: state.establishment
});


export default connect(mapStateToProps, {getEstablishments,deleteEstablishment})(Card);