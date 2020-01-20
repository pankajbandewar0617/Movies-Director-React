import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorDelete extends Component {

    deleteDirector = () => {
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
                <Link to="/directors">
                    <button className="close-button">&#x21D0;</button>
                </Link>

                <h1>Are You Sure to Delete this Data</h1>

                <button onClick={this.deleteDirector}>Yes</button>

                <Link to="/directors">
                    <button>No</button>
                </Link>
            </div>
        );
    }
}

export default DirectorDelete;