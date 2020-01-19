import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorEdit extends Component {
    render() {
        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h3>edit director page</h3>
            </div>
        );
    }
}

export default DirectorEdit;