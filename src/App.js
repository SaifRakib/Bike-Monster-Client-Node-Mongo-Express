import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
