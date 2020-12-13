import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import MessageContext from "./contexts/MessageContextProvider";
import ListingContext from "./contexts/ListingContextProvider";
import AuthContext from "./contexts/AuthContextProvider";
import ListingUpload from "./pages/ListingUpload";
import ListingDetails from "./components/ListingDetails";
import ListingThumbnail from "./components/ListingThumbnail";
import Header from "./components/Header";
import ListingList from "./components/ListingList";
import About from "./components/About";
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage";
import UserPage from "./pages/UserPage";
import { useNotification } from "./providers/NotificationProvider";

function App() {

  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "SUCCESS",
      message: "Hello world",
      title: "Successful Request",
    });
  };
  //{/*<button onClick={handleNewNotification}>test</button>*/}
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContext>
        <ListingContext>
          <MessageContext>
            <Header />
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
              <Route exact path="/user-login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/userpage" component={UserPage}/>
            </Switch>
          </MessageContext>
        </ListingContext>
        </AuthContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
