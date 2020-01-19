import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    navStyle = {
        color: 'red'
    };

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul className="nav-links">
                    <Link style={this.navStyle} to="/directors">
                        <li>Directors</li>
                    </Link>
                    <Link style={this.navStyle} to="/movies">
                        <li>Movies</li>
                    </Link>
                </ul>
            </div>
        );
    }

}
export default Home;