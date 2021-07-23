import React from "react";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";
import Login from "./components/pages/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Chat } from "./components/MainApp/Chat";
import { ChatApp } from "./components/MainApp/ChatApp";

function App() {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student" exact component={Student} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
=======
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={ChatApp} />
        </Switch>
      </BrowserRouter>
>>>>>>> 019764be30e83e8cec0b5f675ed2b289a41c1c5c
    </div>
  );
}

export default App;
