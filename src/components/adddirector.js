import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorAdd extends Component {

    render() {
        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h1>Add Director Page</h1>
                <form>
                    Name: <input placeholder="Director's Name" />
                </form>
            </div>
        );
    }
}

export default DirectorAdd;