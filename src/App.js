import React from "react";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Chat } from "./components/MainApp/Chat";
// import { ChatApp } from "./components/MainApp/ChatApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={Student} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
