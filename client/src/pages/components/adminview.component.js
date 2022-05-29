import React, { Component } from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getEstablishments, deleteEstablishment } from '../../actions/establishmentActions';
import { getUsers } from '../../actions/userActions';
import Button from 'react-bootstrap/Button'

import { 
    Container, 
    Stack,
} from 'react-bootstrap'

import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';

import Navbar from './navbar.component';
import Delayed from './delayed';


function RenderTables(props){
    const { users } = props.state.users;
    const { establishments } = props.state.establishments;

    return(
        <>
        <Navbar/>
            <Container>
            <br></br>
            <MDBCard>
                <MDBCardBody>
                    <h2>Establishments</h2>                        
                    <Stack gap={3}>
                        <Link to="/addestablishment">
                            <Button variant="primary">Add Establishment</Button>
                        </Link>
                        
                        <MDBTable small>
                        <MDBTableHead>
                            <tr>
                                <th >Name</th>
                                <th align="center">Location</th>
                                <th align="center">More</th>
                                <th align="center">Actions</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {establishments?.map((estabs) =>(
                                <tr key={estabs._id}
                                >
                                    <td>{estabs.name}</td>
                                    <td>{estabs.location}</td>
                                    <td>
                                        <Link 
                                            to={`/browse/${estabs.name}`} 
                                            state={{ estab_id: estabs._id, estab_name:estabs.name, estab_deet: estabs.description, estab_price: estabs.price }}
                                        >

                                            <button type="button" className="btn btn-warning me-2 btn-sm">See more</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger me-2 btn-sm" onClick={props.state.onDeleteClick.bind(this,estabs._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                        </svg>
                                        </button>
                                        <button type="button" className="btn btn-primary me-2 btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                        </svg>
                                        </button>
                                    </td>
                                </tr>

                            ))}                       
                        </MDBTableBody>
                        </MDBTable>
                    </Stack>
                </MDBCardBody>
                </MDBCard>
                <br></br>
                <MDBCard>
                    <MDBCardBody>
                        <h2>Users</h2>
                        <MDBTable small>
                            <MDBTableHead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {users?.map((user)=> (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
                <br></br>
            </Container>
        </>
    )
}

function ProtectedAccess(props){
    let access = false;

    if(props.state.user.class === "admin"){
        access = true
    }

    return(
        <>
            { access ? 
                <RenderTables state={{
                    users: props.state.users,
                    establishments: props.state.establishments,
                    onDeleteClick: props.state.onDeleteClick,
                    user: props.state.user
                }}/> 
            : <h2>Access restricted.</h2>}
        </>
    )
}

// export default function Card(){
class AdminTable extends Component{
        constructor(){
            super();
            this.state ={
                user_id: ''
            }
        }    

        componentDidMount() {
            this.props.getEstablishments();
            this.props.getUsers();
        }
        
        onDeleteClick = (id) => {
            this.props.deleteEstablishment(id);
            window.location.reload(false);
        }

        render(){

            return(
                <> 
                    <Delayed waitBeforeShow={1000}>
                        <ProtectedAccess state={{
                            users: this.props.users,
                            establishments: this.props.establishment,
                            onDeleteClick: this.onDeleteClick,
                            user: this.props.user
                        }}/>
                    </Delayed>
                </>
            )
           
        }
}

const mapStateToProps = (state) => ({
    establishment: state.establishment,
    users: state.users,
    user: state.authentication.user
});


export default connect(mapStateToProps, { getEstablishments, deleteEstablishment, getUsers })(AdminTable);