import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import listingThumbnail from "./components/ListingThumbnail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={listingThumbnail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
