import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MessageContext>
          <Header />
          <Switch>
            <Route exact path="/" />
          </Switch>
        </MessageContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
