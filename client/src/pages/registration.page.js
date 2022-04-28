import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar.component';
import RegisterCard from './components/registercard.component';
import LoginCard from './components/logincard.component';

function locationHook(Component) {
    return function WrappedComponent(props) {
      const type = useLocation();
      return <Component {...props} type={type}/>;
    }
  }

class Registration extends Component{
    
    render(){
        let card;
        if (this.props.type.state.type) {
            card = <RegisterCard/>;
          } else {
            card = <LoginCard />;
          }

        return(
            <>
            <Navbar/>
            {card}
            </>
        )
    }
}

export default locationHook(Registration);