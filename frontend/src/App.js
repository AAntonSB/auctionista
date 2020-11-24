import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import ListingContext from "./contexts/ListingContextProvider";
import PrintMessages from "./components/PrintMessages";
import ListingUpload from "./pages/ListingUpload";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ListingContext>
          <MessageContext>
            <Switch>
              <Route exact path="/" component={PrintMessages} />
              <Route exact path="/upload-listing" component={ListingUpload} />
            </Switch>
          </MessageContext>
        </ListingContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
