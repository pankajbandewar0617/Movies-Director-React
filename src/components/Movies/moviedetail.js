import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'


class MovieDetail extends Component {

    state = {
        moviesdata: []
    }

    componentDidMount() {
        this.getAllMovies()
    }

    getAllMovies() {
        const getMovieById = `http://localhost:9000${this.props.match.url}`
        fetch(getMovieById, {
            method: 'GET'
        })
            .then(movies => movies.json())
            .then(data => this.setState({ moviesdata: data }))
    }

    moviestyle = () => {
        return {
            border: "4px solid pink",
            width: "500px",
            margin: "5px",
            padding: "10px",
            // fontSize: "14px",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "25px",
            // lineHeight: "16px",
        }
    }

    editstyle = () => {
        return {
            backgroundColor: "yellow",
            borderRadius: "25px",
        }
    }

    deletestyle = () => {
        return {
            backgroundColor: "red",
            float: "right",
            borderRadius: "25px",
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/movies">
                        <p>Go Back</p>
                    </Link>
                </div>
                {/* {console.log(this.state.moviesdata)} */}
                <div style={this.moviestyle()}>
                    <p><b>Id : </b>{this.state.moviesdata.id}</p>
                    <p><b>Title : </b>{this.state.moviesdata.title}</p>
                    <p><b>Actor : </b>{this.state.moviesdata.actor}</p>
                    <p><b>Description : </b>{this.state.moviesdata.description}</p>
                    <p><b>Genre : </b>{this.state.moviesdata.genre}</p>
                    <p><b>Rating : </b>{this.state.moviesdata.rating}</p>
                    <p><b>Gross : </b>{this.state.moviesdata.gross} million $</p>
                    <p><b>Metascore : </b>{this.state.moviesdata.metascore}</p>
                    <p><b>Runtime : </b>{this.state.moviesdata.runtime}</p>
                    <p><b>Votes : </b>{this.state.moviesdata.votes}</p>
                    <p><b>Director : </b>{this.state.moviesdata.director}</p>
                    <p><b>Year : </b>{this.state.moviesdata.year}</p>
                    <div>
                        <Link to={`/movies/${this.state.moviesdata.id}/edit`}>
                            <button style={this.editstyle()}>edit</button>
                        </Link>

                        <Link to={`/movies/${this.state.moviesdata.id}/delete`}>
                            <button style={this.deletestyle()}>delete</button>
                        </Link>

                    </div>
                </div>

            </div>
        );
    }
}

export default MovieDetail;