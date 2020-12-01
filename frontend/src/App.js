import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import PrintMessages from "./components/PrintMessages";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MessageContext>
          <Switch>
            <Route exact path="/" component={RegisterModal} />
          </Switch>
        </MessageContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
