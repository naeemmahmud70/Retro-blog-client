import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import About from './Components/About/About';
import MoreNewLook from './Components/MoreNewLook/MoreNewLook';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/blog/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute >

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/moreNewLook">
              <MoreNewLook></MoreNewLook>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
