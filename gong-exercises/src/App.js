import React from 'react';
import './style/style.scss'
import SideMenuComponent from './SideMenuComponent'
import TweetsStreamComponent from "./TweetsStreamComponent";

function App() {
  return (
      <>
          <div id="wrapper">
            <div id="side-nav-wrapper">
                <SideMenuComponent/>
            </div>
            <div id="middle-stream-twits">
                <TweetsStreamComponent/>
            </div>
          </div>
      </>
  );
}

export default App;
