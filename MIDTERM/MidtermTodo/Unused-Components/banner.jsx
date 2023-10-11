import React, { Component } from 'react';
import loginBtn from './loginBtn';
import logoutBtn from './logoutBtn';
import createTodoForm from './createTodoForm';

class Banner extends Component {
    state = { } 
    render() { 
        return <div className="mainBanner">
            <loginBtn />
            <logoutBtn />
            <createTodoForm />
        </div>;
    }
}
 
export default Banner;