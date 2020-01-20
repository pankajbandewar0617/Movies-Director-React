import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DeleteMovie extends Component {

    deleteMovie = () => {
        const url = `http://localhost:9000${this.props.match.url}`;
        fetch(url, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Link to="/movies">
                    <button className="close-button">&#x21D0;</button>
                </Link>

                <h1>Are You Sure to Delete this Data</h1>

                <button onClick={this.deleteMovie()}>Yes</button>

                <Link to="/movies">
                    <button>No</button>
                </Link>
            </div>
        );
    }
}

export default DeleteMovie;