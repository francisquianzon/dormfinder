import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from './components/navbar.component';
import Headline from './components/headline.component';
import Marketing from './components/marketing.component';

export default class Homepage extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <Headline/>
            <Marketing/>            
            </>
        )
    }
}

// export default class Homepage extends Component {
//     render(){

//         return (
//           <>
//           <Router>
//             <div>
//               <ul>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//               </ul>
      
//               <hr />
      
//               {/*
//                 A <Switch> looks through all its children <Route>
//                 elements and renders the first one whose path
//                 matches the current URL. Use a <Switch> any time
//                 you have multiple routes, but you want only one
//                 of them to render at a time
//               */}
//               <Routes>
//                 <Route exact path="/">
//                   <Home />
//                 </Route>
//                 <Route path="/about">
//                 <About />
//                 </Route>
//                 <Route path="/dashboard">
//                   <Dashboard />
//                 </Route>
//               </Routes>
//             </div>
//           </Router>
//           </>
//         );
//     }
//   }
  
//   function Test() {
//     return (
//       <div>
//         <h2>TEST PAGE</h2>
//       </div>
//     );
//   }
  
//   function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }
  
//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }
  
//   function Dashboard() {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//     );
//   }