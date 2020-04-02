import React from 'react';
import PropTypes from 'prop-types'

class SideMenuItemComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            title: props.title
        }
    }

    render() {
        return (<li>
                <div id="profileLink">
                    <img className="icon" src={this.props.src} alt={this.props.title}></img>
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