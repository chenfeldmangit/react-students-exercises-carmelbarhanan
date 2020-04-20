import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class SideMenuItemComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (<Link to={this.props.link}>
                    <li className="side-nav-item">
                        <div id="profileLink">
                            {this.props.title === 'Profile' ?
                            <img className="icon profilePicture" src={this.props.src} alt={this.props.title}></img> :
                            <img className="icon" src={this.props.src} alt={this.props.title}></img>}
                            <h3 className="menuTitle"> {this.props.title} </h3>
                        </div>
                    </li>
                </Link>);
    }
}

SideMenuItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string
};


export default SideMenuItemComponent;