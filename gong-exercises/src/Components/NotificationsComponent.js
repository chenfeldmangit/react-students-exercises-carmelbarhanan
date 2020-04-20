import React from 'react';
import kineret from "../images/kineret.jpg";
import yarden from "../images/Yarden.jpg";
import dan from "../images/dan.jpg";
import taly from "../images/mom.jpg";
import beny from "../images/beny.jpg";
import heart from '../icons/heart.svg'
import user from '../icons/user.svg'

const notificationsList = [
    {
        fullName: "Kineret Tavor",
        profilePic: kineret,
        action: "like",
        likedTweetId: 234,
        id: 123
    }, {
        fullName: "Yarden Nahum Bar",
        profilePic: yarden,
        action: "follow",
        id: 124
    },
    {
        fullName: "Dan Bar",
        profilePic: dan,
        action: "like",
        likedTweetId: 235,
        id: 125
    },
    {
        fullName: "Taly Bar",
        profilePic: taly,
        action: "follow",
        id: 123
    },
    {
        fullName: "Beny Bar",
        profilePic: beny,
        action: "like",
        likedTweetId: 235,
        id: 123
    }
];

export default function NotificationsComponent(){
    localStorage.setItem('notificationsList', JSON.stringify(notificationsList));

    var notificationsListFromStorage = JSON.parse(localStorage.getItem('notificationsList') ) || {};
    var tweetsListFromStorage = JSON.parse(localStorage.getItem('tweetsList') ) || {};

    return (<div id='middle-stream-notifications'>
            <h1>Notification</h1>
            <ul id='notificationList'>
            {notificationsListFromStorage.map(item => {

                var icon = item.action === 'like' ? heart : user;
                var notificationContent = item.action === 'like' ? " liked your Tweet" : " followed you";
                var relatedTweet = item.likedTweetId !== null ? tweetsListFromStorage.filter(t => t.id === item.likedTweetId) : null;
                var relatedTweetContent = relatedTweet.length !== 0 ? relatedTweet[0].tweetContent: null;

                return <>
                 <li id='notificationItem' key={item.id}>
                     <img className='icon' src={icon}/>
                     <img className='profilePicture' src={item.profilePic}/>
                     <p>{item.fullName + notificationContent}</p>
                     <p className='relatedTweet'>{relatedTweetContent}</p>
                 </li>
                </>
            })}
            </ul>
        </div>)

}