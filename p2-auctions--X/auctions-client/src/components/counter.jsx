//imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
    state = {
        count: 0,
        name: "Mosh",
        imageUrl: "https://picsum.photos/200"
    };

    render() {
        return (
        <div>
            <img src={this.state.imageUrl} alt=""/>
                <span className="badge badge-primary m-2">{this.state.count}</span>
                <button className="btn btn-primary">I'm button.</button>
        </div>
        );
    }   
}

export default Counter;
