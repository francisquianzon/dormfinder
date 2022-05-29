import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// import './App.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//IMPORT REDUX FOR STATE MANAGEMENT
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadUser } from './actions/authActions';

//IMPORT PAGES
import Homepage from './pages/homepage.page';
import Browse from './pages/browsepage';
import AddEstab from './pages/addEstablishment.page';
import EstabDetails from './pages/estabDetails.page';
import AdminView from './pages/components/adminview.component';
import Register from './pages/registration.page';


//CREATE A STORE THAT WILL HOLD THE STATE
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //install 'React DevTools' in browser
));

//calls the redux load user action 
store.dispatch(loadUser());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="browse" exact element={<Browse/>}/>
        <Route path="/browse/search" exact element={<Browse/>}/>
        <Route path='/addestablishment' exact element={<AddEstab/>} />
        <Route path='/browse/:id' exact element={<EstabDetails/>}/>
        <Route path='/browse.admin' exact element={<AdminView/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/login' exact element={<Register/>}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

