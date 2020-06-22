import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import Users  from "./Users";
import ViewCoupon from './ViewCoupon';
import ApplyCoupo from './ApplyCoupon';
import ReactRouter from './ReactRouter';
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/add" exact component={HomePage} />
        <Route path='/user'  component={Users} />
         <Route path='/list' component={ViewCoupon} />
         <Route path='/statics' component={ApplyCoupo} />
         <Route path='/edit/:slug' component={ReactRouter} />
        </Switch>
    </div>
  );
}

export default App;



