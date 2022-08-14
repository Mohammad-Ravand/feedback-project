import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='text-center bg-black text-pink-500 font-bold pt-1 pb-3 text-2xl h-10 App'>
                <h2>Feedback UI</h2>
            </div>
        );
    }
}

export default Header;