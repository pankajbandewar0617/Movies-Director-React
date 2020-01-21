import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends Component {

    // navStyle = {
    //     color: 'blue',
    //     display: 'flex',
    // };


    render() {
        return (
            <div>
                <ul className="nav-links">
                    <Link style={this.navStyle} to="/movies">
                        <button className="movies">Movies</button>
                    </Link>
                    <Link style={this.navStyle} to="/directors">
                        <button className="directors">Directors</button>
                    </Link>
                </ul>
            </div>
        );
    }

}
export default Home;