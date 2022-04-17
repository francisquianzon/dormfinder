import React, {Component, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import './components.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments } from '../../actions/establishmentActions';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'


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
        
        render(){
            // const auth = useSelector(state => state.establishment);
            const { establishments } = this.props.establishment;
            // console.log("HELLO");
            console.log(this.props);

            return(
                <>
                    <Container>
                    <br></br>
                    <h2>Establishments</h2>
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
                                </tr>

                            ))}                       
                        </tbody>
                        </Table>
                        <Link to="/addEstablishment">
                            <Button variant="primary">Add Establishment</Button>
                        </Link>
                    </Container>
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


export default connect(mapStateToProps, {getEstablishments})(Card);