import React from 'react';
import TweetsArticleComponent from "./TweetsArticleComponent";
import profile1 from "./images/profile.jpg";
import profile2 from "./images/profile2.jpg";


class TweetsStreamComponent extends React.Component {
    tweetsList = [
        {
            id: 123,
            profilePhotoPathToTweeter: profile1,
            tweeterName: "Carmel Bar-Hanan",
            tweetContent: "Yes, The seaweed is always greener, In somebody else's lake. You dream about going up there, But that is a big mistake",
            timeOfTweet: "March 30 2020, 14:20",
            numberOfLikes: 1
        }, {
            id: 124,
            profilePhotoPathToTweeter: profile2,
            tweeterName: "Etai Bar-Hanan",
            tweetContent: "Down here all the fish is happy, As off through the waves they roll. Yes, The fish on the land ain't happy, They sad 'cause they in their bowl",
            timeOfTweet: "March 31 2020, 10:41",
            numberOfLikes: 4
        }
    ];

    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <div id="middle-stream-twits">
                <div id="addTweet">
                    <h3>Home</h3>
                    <div>
                        <img className="profilePicture" src={profile1} alt="home"/>
                            <input type="text" id="tweetInput" placeholder="What's happening?"/>
                    </div>
                    <input type="submit" value="Tweet" className="tweet-button" onClick="Tweets.saveNewTweet()"/>
                </div>
                <h3> Tweets </h3>
                <div id="tweets"></div>
                {this.tweetsList.map(item => {
                    return <TweetsArticleComponent author={item.tweeterName} profile={item.profilePhotoPathToTweeter} content={item.tweetContent}
                    time={item.timeOfTweet} numOfLikes={item.numberOfLikes} key={item.id}
                    > </TweetsArticleComponent>
                })}
            </div>
            </>
    }
}

export default TweetsStreamComponent;