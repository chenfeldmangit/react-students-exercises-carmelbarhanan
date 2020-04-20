import React, {component, useState} from 'react';
import './style/style.scss'
import SideMenuComponent from './Components/SideMenuComponent'
import NewsFeedComponent from "./Components/NewsFeedComponent";
import NotificationsComponent from "./Components/NotificationsComponent";
import MyProfileComponent from "./Components/MyProfileComponent";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
          <div id="wrapper">
            <div id="side-nav-wrapper">
                <SideMenuComponent/>
            </div>
            <Switch>
              <Route path="/" component={NewsFeedComponent} exact />
              <Route path="/notifications" component={NotificationsComponent} />
              <Route path="/profile" component={MyProfileComponent} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
}

export default App;
