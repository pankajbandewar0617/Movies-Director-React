import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DeleteMovie extends Component {

    render() {
        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h3>delete movie page</h3>
            </div>
        );
    }
}

export default DeleteMovie;