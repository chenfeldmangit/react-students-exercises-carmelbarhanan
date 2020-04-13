import React from 'react';
import NewsFeedTweetComponent from "./NewsFeedTweetComponent";
import profile1 from "../images/profile.jpg";
import profile2 from "../images/profile2.jpg";


const tweetsList = [
    {
        id: 123,
        profilePhotoPathToTweeter: profile1,
        tweeterName: "Carmel Bar-Hanan",
        tweetContent: "Yes, The seaweed is always greener, In somebody else's lake. You dream about going up there, But that is a big mistake",
        timeOfTweet: "March 30 2020, 14:20"
    }, {
        id: 124,
        profilePhotoPathToTweeter: profile2,
        tweeterName: "Etai Bar-Hanan",
        tweetContent: "Down here all the fish is happy, As off through the waves they roll. Yes, The fish on the land ain't happy, They sad 'cause they in their bowl",
        timeOfTweet: "March 31 2020, 10:41"
    }
];

export default function NewsFeedComponent(){

    return <>
        <div id="middle-stream-twits">
            <div id="addTweet">
                <h3>Home</h3>
                <div>
                    <img className="profilePicture" src={profile1} alt="home"/>
                        <input type="text" id="tweetInput" placeholder="What's happening?"/>
                </div>
                <input type="submit" value="Tweet" className="tweet-button" onClick={saveNewTweet}/>
            </div>
            <h3> Tweets </h3>
            {tweetsList.map(item => {
                return <NewsFeedTweetComponent author={item.tweeterName} profile={item.profilePhotoPathToTweeter} content={item.tweetContent}
                                               time={item.timeOfTweet} key={item.id}
                > </NewsFeedTweetComponent>
            })}
        </div>
        </>

}

let saveNewTweet = function(){
    alert("Save Tweet!")
};