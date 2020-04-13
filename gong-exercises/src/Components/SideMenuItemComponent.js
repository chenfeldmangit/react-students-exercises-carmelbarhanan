import React from 'react';
import PropTypes from 'prop-types'

class SideMenuItemComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (<li className="side-nav-item">
                <div id="profileLink">
                    {this.props.title === 'Profile' ?
                    <img className="icon profilePicture" src={this.props.src} alt={this.props.title}></img> :
                    <img className="icon" src={this.props.src} alt={this.props.title}></img>}
                    <h3 className="menuTitle"> {this.props.title} </h3>
                </div>
                </li>);
    }
}

SideMenuItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string
};


export default SideMenuItemComponent;