import React from 'react';
import trash from './icons/trash.svg'
import like from './icons/like.svg'

class TweetsArticleComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {color: 'none',
                        numOfLikes: 0}
    }

    likeTweet = () => {
        if (this.state.color === 'none') {
            this.setState({color: 'invert(.5) sepia(1) saturate(5) hue-rotate(175deg)',
                numOfLikes: this.state.numOfLikes + 1})
        }
        else {
            this.setState({numOfLikes: this.state.numOfLikes + 1})
        }
    };

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
                    <img className="icon tweet-action" src={trash} alt='delete'/>
                    <img className="icon tweet-action" src={like} alt='like' style={{filter: this.state.color}} onClick={this.likeTweet}/>
                    <p id="numOfLikes">{this.state.numOfLikes}</p>
                </div>
            </article>
        )
    }

}

export default TweetsArticleComponent;