import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostCard from './components/postCard.component'

import Navbar from './components/navbar.component';
import Delayed from './components/delayed';

class AddEstablishment extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <br></br>
            <Delayed waitBeforeShow={1000}>
                { this.props.isAuthenticated ? 
                <PostCard/>
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

export default connect(mapStateToProps, { })(AddEstablishment);