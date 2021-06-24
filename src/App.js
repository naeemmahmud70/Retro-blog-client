import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/Home/NotFound/NotFound';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <div className="">
     <Router>
       <Navbar></Navbar>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         
         <Route path="/blog/:id">
           <BlogDetails></BlogDetails>
         </Route>

         <Route path="/admin">
           <Admin></Admin>
         </Route>

         <Route path="/login">
           <Login></Login>
         </Route>

         <Route exact path="/">
           <Home></Home>
         </Route>

         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
