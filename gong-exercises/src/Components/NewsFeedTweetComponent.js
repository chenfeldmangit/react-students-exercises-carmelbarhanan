import React, {useState} from 'react';
import trash from '../icons/trash.svg'
import like from '../icons/like.svg'


export default function NewsFeedTweetComponent(props){
    const [tweetData, setTweetData] = useState({color: 'none', numOfLikes: 0});

    const likeTweet = () => {
        if (tweetData.color === 'none') {
            setTweetData({color: 'invert(.5) sepia(1) saturate(5) hue-rotate(175deg)',
                numOfLikes: tweetData.numOfLikes + 1})
        }
        else {
            setTweetData({...tweetData, numOfLikes: tweetData.numOfLikes + 1})
        }
    };

    return (
        <article>
            <div id="nameAndProfile">
                <img className="profilePicture" alt="profilePicture" src={props.profile}/>
                <h4 className="author">{props.author}</h4>
            </div>
            <p id="tweenContent">{props.content}</p>
            <div>
                <p id="timeOfTweet">{props.time}</p>
                <img className="icon tweet-action" src={trash} alt='delete'/>
                <img className="icon tweet-action" src={like} alt='like' style={{filter: tweetData.color}} onClick={likeTweet}/>
                <p id="numOfLikes">{tweetData.numOfLikes}</p>
            </div>
        </article>
    )
}

