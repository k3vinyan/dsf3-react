import React from "react";
import ReactDOM from 'react-dom';
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route, Link, hashHistory, IndexRoute } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';

import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Routes from "./pages/Routes";
import Checkin from "./pages/Checkin";
import AssignRoutes from "./pages/AssignRoutes";
import Checkout from "./pages/Checkout";

ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <Layout>
        <Switch>
          <Route exact path="/" name="home" component={Home} />
          <Route path="/drivers" name="drivers" component={Drivers} />
          <Route path="/routes" name="routes" component={Routes} />
          <Route path="/checkin" name="checkin" component={Checkin} />
          <Route path="/assignroutes" name="assignroutes" component={AssignRoutes} />
          <Route path="/checkout" name="checkout" component={Checkout} />
        </Switch>
      </Layout>
    </BrowserRouter>,
  document.getElementById('app')
);
