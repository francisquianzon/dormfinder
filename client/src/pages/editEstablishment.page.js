import React, {Component} from 'react';
import { connect } from 'react-redux';
import EditEstab from './components/editEstab.component';
import { useLocation } from 'react-router-dom';
import {  getDetails } from '../actions/establishmentActions';

import Navbar from './components/navbar.component';
import Delayed from './components/delayed';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const estab = useLocation();
      return <Component {...props} estab={estab}/>;
    }
  }

class EditEstablishment extends Component{

    getEstablishmentDetails(id){
        this.props.getDetails(id);
      }  

    componentDidMount() {
        this.getEstablishmentDetails(this.props.estab.state.estab_id);
      }

    render(){
        return(
            <>
            <Navbar/>
            <br></br>
            <Delayed waitBeforeShow={1000}>
                { this.props.isAuthenticated ? 
                <EditEstab/>
                :
                <h2>Access is restricted</h2>
                }
            </Delayed>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    error: state.error,
    isLoading: state.establishment.loading
})

// export default AddEstablishment;
export default connect(mapStateToProps, { getDetails })(locationHook(EditEstablishment));