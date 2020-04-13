import React from 'react';
import trash from './icons/trash.svg'
import like from './icons/like.svg'

class TweetsArticleComponent extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <article>
                <div id="nameAndProfile">
                    <img className="profilePicture" alt="profilePicture" src={this.props.profile}/>
                    <h4 className="author">{this.props.author}</h4>
                </div>
                <p id="tweenContent">{this.props.content}</p>
                <div>
                    <p id="timeOfTweet">{this.props.time}</p>
                    <img className="icon tweet-action" src={trash} alt="delete" onClick="Tweets.deleteTweet(this)"/>
                    <img className="icon tweet-action" src={like} alt="like" onClick="Tweets.addLikeToTweet(this)"/>
                    <p id="numOfLikes">{this.props.numOfLikes}</p>
                </div>
            </article>
        )
    }

}

export default TweetsArticleComponent;