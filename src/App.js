import React from "react";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";
import Login from "./components/pages/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatApp } from "./components/MainApp/ChatApp";
// import { Chat } from "./components/MainApp/Chat";
// import { ChatApp } from "./components/MainApp/ChatApp";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student" exact component={Student} />
            <Route path="/login" exact component={Login} />
            {/* <Route path="/chat" exact component={ChatApp} */}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
