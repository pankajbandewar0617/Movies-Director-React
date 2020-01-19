import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    navStyle = {
        color: 'blue',
        display: 'flex',
    };

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul className="nav-links">
                    <Link style={this.navStyle} to="/movies">
                        <div>Movies</div>
                    </Link>
                    <Link style={this.navStyle} to="/directors">
                        <div>Directors</div>
                    </Link>
                </ul>
            </div>
        );
    }

}
export default Home;