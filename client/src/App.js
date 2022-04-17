import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './pages/components/navbar.component';
import Headline from './pages/components/headline.component';
import Marketing from './pages/components/marketing.component';
import Homepage from './pages/homepage.page';
// import Test from './pages/testpage.page';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Link to="/test">Test</Link>

      </div>
      <Routes>
        <Route path="/" exact component={Homepage}/>
        <Route path="/test" exact component={Headline}/>
      </Routes>
    </Router>
  );
}