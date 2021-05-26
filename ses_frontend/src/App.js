import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import DirectChatPage from "./components/DirectChatPage"
import Cleared from "./components/clearedFunctions";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/cleared" component={Cleared}/>
            <Route path="/chat" component={DirectChatPage}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
