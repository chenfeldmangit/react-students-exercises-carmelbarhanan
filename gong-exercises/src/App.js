import React from 'react';
import './style/style.scss'
import SideMenuComponent from './SideMenuComponent'
import NewsFeedComponent from "./NewsFeedComponent";

function App() {
  return (
      <>
          <div id="wrapper">
            <div id="side-nav-wrapper">
                <SideMenuComponent/>
            </div>
            <div id="middle-stream-twits">
                <NewsFeedComponent/>
            </div>
          </div>
      </>
  );
}

export default App;
