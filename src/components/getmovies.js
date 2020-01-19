import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moviename from './moviename';

class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        this.getAllMovies()
    }

    getAllMovies() {
        fetch('http://localhost:9000/movies')
            .then(movies => movies.json())
            .then(moviedata => this.setState({ movies: moviedata }))
    }

    addstyle = () => {
        return {
            backgroundColor: "green"
        }
    }

    render() {
        return (
            <div>
                <h2>All Movies</h2>
                <Link to="/">
                    <p>Go Back</p>
                </Link>

                <Link to="/movies/new">
                    <button style={this.addstyle()} onClick={this.add}>add movies</button>
                </Link>
                {this.state.movies.map((data) =>
                    <Moviename
                        data={data}
                        key={data.id} />
                )}
            </div>
        );
    }
}

export default Movies;