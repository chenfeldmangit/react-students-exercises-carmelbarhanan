import React from 'react';
import twitterLogo from "../icons/Twitter_bird_logo.svg.png";
import home from "../icons/home.svg";
import grid from "../icons/grid.svg";
import notification from "../icons/notification.svg";
import message from "../icons/message.svg";
import bookmark from "../icons/bookmark.svg";
import list from "../icons/list.svg";
import profile from "../images/profile.jpg";
import more from "../icons/more.svg";
import SideMenuItemComponent from "./SideMenuItemComponent"

class SideMenuComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <ul>
                    <img className="twitterLogo" src={twitterLogo} alt="twitterLogo"></img>
                </ul>
                <ul>
                    <SideMenuItemComponent src={home} title="Home" link='/'/>
                    <SideMenuItemComponent src={grid} title="Explore" link='/explore'/>
                    <SideMenuItemComponent src={notification} title="Notification" link='/notifications'/>
                    <SideMenuItemComponent src={message} title="Messages" link='/messeges'/>
                    <SideMenuItemComponent src={bookmark} title="Bookmarks" link='/bookmarks'/>
                    <SideMenuItemComponent src={list} title="Lists" link='/lists'/>
                    <SideMenuItemComponent src={profile} title="Profile" link='/profile'/>
                    <SideMenuItemComponent src={more} title="More" link='/more'/>
                    <li className="side-nav-item">
                        <button className="tweet-button">Tweet</button>
                    </li>
                </ul>
            </>
        )
    }
}


export default SideMenuComponent;