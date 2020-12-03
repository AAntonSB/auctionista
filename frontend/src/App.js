import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import ListingContext from "./contexts/ListingContextProvider";
import PrintMessages from "./components/PrintMessages";
import ListingUpload from "./pages/ListingUpload";
import ListingDetails from "./components/ListingDetails";
import ListingThumbnail from "./components/ListingThumbnail";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListingList from "./components/ListingList";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ListingContext>
          <MessageContext>
            <Header/>
            <Switch>
          <Route exact path="/" component={ListingList} />
              <Route exact path="/upload-listing" component={ListingUpload} />
              <Route
                exact
                path="/listing-details/:id"
                component={ListingDetails}
              />
              <Route exact path="/thumbnail" component={ListingThumbnail} />
              <Route exact path="/about" component={About}/>
            </Switch>
          </MessageContext>
        </ListingContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
