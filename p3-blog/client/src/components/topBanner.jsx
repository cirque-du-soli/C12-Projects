import React, { Component } from 'react';

class TopBanner extends Component {
    state = { 
        bannerText: "Welcome to the site!"
     } 
    render() { 
        return <div className="topBanner">{this.state.bannerText}</div>;
    }
}
 
export default TopBanner;