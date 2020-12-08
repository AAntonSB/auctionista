import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import ListingContext from "./contexts/ListingContextProvider";
import ListingUpload from "./pages/ListingUpload";
import ListingDetails from "./components/ListingDetails";
import ListingThumbnail from "./components/ListingThumbnail";
import Header from "./components/Header";
import ListingList from "./components/ListingList";
import About from "./components/About";
import { useNotification } from "./providers/NotificationProvider";

function App() {

  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "ERROR",
      message: "Hello world",
      title: "Successful Request",
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ListingContext>
          <MessageContext>
            <Header />
            <button onClick={handleNewNotification}>test</button>
            <Switch>
              <Route exact path="/" component={ListingList} />
              <Route exact path="/upload-listing" component={ListingUpload} />
              <Route
                exact
                path="/listing-details/:id"
                component={ListingDetails}
              />
              <Route exact path="/thumbnail" component={ListingThumbnail} />
              <Route exact path="/about" component={About} />
            </Switch>
          </MessageContext>
        </ListingContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
