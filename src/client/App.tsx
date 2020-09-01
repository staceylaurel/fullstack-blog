import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Compose from "./views/Compose";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import PrivateRoute from "./components/PrivateRoute";
import Donate from "./views/Donate";
import Contact from "./views/Contact";

const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/newblog">
          <Compose />
        </PrivateRoute>
        <Route exact path="/:id/blogdetails">
          <Details />
        </Route>
        <PrivateRoute exact path="/:id/blogadmin">
          <Admin />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/donate">
          <Donate />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
