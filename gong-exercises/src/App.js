import React from 'react';
import './App.css';
import './style/style.css'
import twitterLogo from './icons/Twitter_bird_logo.svg.png'
import home from './icons/home.svg'
import grid from './icons/grid.svg'
import notification from './icons/notification.svg'
import message from './icons/message.svg'
import bookmark from './icons/bookmark.svg'
import list from './icons/list.svg'
import profile from './images/profile.jpg'
import more from './icons/more.svg'
import SideMenuItemComponent from './SideMenuItemComponent'

function App() {
  return (
    <div id="side-nav-wrapper">
          <ul>
              <img className="twitterLogo" src={twitterLogo} alt="twitterLogo"></img>
          </ul>
          <ul>
              <SideMenuItemComponent src={home} title={"Home"}/>
              <SideMenuItemComponent src={grid} title={"Explore"}/>
              <SideMenuItemComponent src={notification} title={"Notification"}/>
              <SideMenuItemComponent src={message} title={"Messages"}/>
              <SideMenuItemComponent src={bookmark} title={"Bookmarks"}/>
              <SideMenuItemComponent src={list} title={"Lists"}/>
              <SideMenuItemComponent src={profile} title={"Profile"}/>
              <SideMenuItemComponent src={more} title={"More"}/>
              <li>
                  <button className="tweet-button">Tweet</button>
              </li>
          </ul>
      </div>
  );
}

export default App;
