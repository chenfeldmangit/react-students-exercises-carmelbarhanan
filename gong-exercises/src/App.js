import React, {component} from 'react';
import './style/style.scss'
import SideMenuComponent from './Components/SideMenuComponent'
import NewsFeedComponent from "./Components/NewsFeedComponent";
import NotificationsComponent from "./Components/NotificationsComponent";
import MyProfileComponent from "./Components/MyProfileComponent";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultHomePage from "./DefaultHomePage";
import { connect } from 'react-redux'

function App(props) {
    return (<>
            {!props.loginData.isLoggedIn &&
            <DefaultHomePage isLogedIn={props.loginData.isLoggedIn}/>}

            {props.loginData.isLoggedIn &&
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
            }
        </>
    );
}

export default connect(
    (state) => ({
        loginData: state
    })
)(App);