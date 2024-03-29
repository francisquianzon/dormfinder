import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// import './App.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//IMPORT REDUX FOR STATE MANAGEMENT
// import rootReducer from './reducers';
import {Provider} from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { loadUser } from './actions/authActions';

//IMPORT PAGES
import Homepage from './pages/homepage.page';
import Browse from './pages/browsepage';
import AddEstab from './pages/addEstablishment.page';
import EstabDetails from './pages/estabDetails.page';
import AdminView from './pages/components/adminview.component';
import Register from './pages/registration.page';
import LearnMore from './pages/learnmore.page';
import EditEstablishment from './pages/editEstablishment.page';
import store from './store';

export default class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="browse" exact element={<Browse/>}/>
            <Route path="/browse/search" exact element={<Browse/>}/>
            <Route path='/addestablishment' exact element={<AddEstab/>} />
            <Route path='/editestablishment' exact element={<EditEstablishment/>} />
            <Route path='/browse/:id' exact element={<EstabDetails/>}/>
            <Route path='/browse.admin' exact element={<AdminView/>}/>
            <Route path="/browse.admin/search" exact element={<AdminView/>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Register/>}/>
            <Route path='/about' exact element={<LearnMore/>}/>
          </Routes>
        </Router>
      </Provider>
    )
  }
}