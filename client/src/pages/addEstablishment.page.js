import React, {Component} from 'react';
import PostCard from './components/postCard.component'

import Navbar from './components/navbar.component';

class AddEstablishment extends Component{
    render(){
        // console.log(this.props.user._id)
        return(
            <>
            <Navbar/>
            <br></br>
            <PostCard/>
            </>
        )
    }
}

export default AddEstablishment;