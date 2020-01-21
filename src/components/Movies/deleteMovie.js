import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DeleteMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.deleteMovie(id);
        console.log(id)
    }

    deleteMovie = (id) => {
        const url = `http://localhost:9000/movies/${id}/delete`;
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
                    <button className="back-button">&#x21D0;</button>
                </Link>

                <p style={{ fontSize: '40px', marginTop: '50px' }}>{`Your Movie data with this id : ${this.props.match.params.id} is deleted. `}</p>

            </div>
        );
    }
}

export default DeleteMovie;