import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import DontKnow from "./components/dontKnow/dontKnow.jsx";
import GuestList from "./components/guestList/guestList.jsx";
import SmallHall from "./components/halls/small-hall/smallHall.jsx";
import BigHall from "./components/halls/big-hall/bigHall.jsx";
import GuestForm from "./components/addGuestForm/form.jsx";


const App = () => (
  <Router>
      <Header />
      <Switch>
        <Route path="/guest-list" component={GuestList} />
        <Route path="/small-hall" component={SmallHall} />
        <Route path="/big-hall" component={BigHall} />
        <Route path="/dont-know" component={DontKnow} />
        <Route path="/add-new-guest" component={GuestForm} />
        <Redirect from="/" to="guest-list" />
      </Switch>
  </Router>
)

export default App;
