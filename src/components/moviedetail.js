import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {

    render() {
        return (
            <div>
                <Link to="/movies">
                    <p>Go Back</p>
                </Link>
                <h2>Movie name</h2>
            </div>
        );
    }
}

export default MovieDetail;