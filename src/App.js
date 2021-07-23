import React from "react";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student" exact component={Student} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
