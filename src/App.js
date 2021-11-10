import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import Purchase from "./Components/Purchase/Purchase";

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
