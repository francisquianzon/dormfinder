import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//IMPORT REDUX FOR STATE MANAGEMENT
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//IMPORT PAGES
import Homepage from './pages/homepage.page';
import Browse from './pages/browse.page';
import AddEstab from './pages/addEstablishment.page';

//CREATE A STORE THAT WILL HOLD THE STATE
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/browse" exact element={<Browse/>}/>
        <Route path='/addEstablishment' exact element={<AddEstab/>} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

