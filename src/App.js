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

function App() {
  return (
    <div className="">
     <Router>
       <Switch>
         <Route path="/home">
           <Home></Home>
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
     </Router>
    </div>
  );
}

export default App;
