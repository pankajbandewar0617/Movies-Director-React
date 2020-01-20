import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorDelete extends Component {

    deleteDirector = () => {
        console.log('delete')
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
                <h1>Are You Sure to Delete this Data</h1>
                {console.log(this.props.match.url)}
                <button onClick={this.deleteDirector}>Yes</button>
                <Link to="/directors">
                    <button>No</button></Link>
                {console.log(this.props)}
            </div>
        );
    }
}

export default DirectorDelete;