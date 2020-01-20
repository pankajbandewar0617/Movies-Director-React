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


    addstyle = () => {
        return {
            backgroundColor: "green",
            borderRadius: "25px",
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">

                    <Link to="/">
                        <button className="close-button">&#x21D0;</button>
                    </Link>
                    <h2>All Movies</h2>

                    <Link to="/movies/new">
                        <button id="addButton" style={this.addstyle()} onClick={this.add}>add movies</button>
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