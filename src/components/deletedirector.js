import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorDelete extends Component {
    render() {
        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h3>delete director page</h3>
            </div>
        );
    }
}

export default DirectorDelete;