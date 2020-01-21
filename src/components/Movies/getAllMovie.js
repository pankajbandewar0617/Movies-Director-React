import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moviename from './moviename';
import '../../App.css'


class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        this.getAllMovies()
    }

    getAllMovies() {
        fetch('http://localhost:9000/movies', {
            method: 'GET'
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(moviedata => this.setState({ movies: moviedata }))
    }


    addStyle = () => {
        return {
            backgroundColor: "rgb(92, 182, 65)",
            borderRadius: "25px",
            width: "130px",
            height: "40px",
            fontSize: "20px",
            color: "navy",
            border: 'none',
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">

                    <Link to="/">
                        <button className="back-button">&#x21D0;</button>
                    </Link>
                    <h2>All Movies</h2>

                    <Link to="/movies/new">
                        <button id="addButton" style={this.addStyle()} onClick={this.add}>add movies</button>
                    </Link>

                </div>

                <div className="all-movies">
                    {this.state.movies.map((data) =>
                        <Moviename
                            data={data}
                            key={data.id}
                            deleteMovie={this.deleteMovie} />
                    )}
                </div>
            </div>
        );
    }
}

export default Movies;