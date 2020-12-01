import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import PrintMessages from "./components/PrintMessages";
import ListingUpload from "./pages/ListingUpload";
import listingThumbnail from "./components/ListingThumbnail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MessageContext>
          <Switch>
            <Route exact path="/" component={PrintMessages} />
            <Route exact path="/upload-listing" component={ListingUpload} />
          <Route exact path="/" component={listingThumbnail} />
          </Switch>
        </MessageContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
