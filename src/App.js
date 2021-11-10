import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import Purchase from "./Components/Purchase/Purchase";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/explore">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
