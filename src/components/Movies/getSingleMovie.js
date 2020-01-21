import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'


class MovieDetail extends Component {

    state = {
        moviesdata: []
    }

    componentDidMount() {
        this.getMovie()
    }

    getMovie() {
        const getMovieById = `http://localhost:9000${this.props.match.url}`
        fetch(getMovieById, {
            method: 'GET'
        })
            .then(movies => movies.json())
            .then(data => this.setState({ moviesdata: data }))
    }

    movieStyle = () => {
        return {
            border: "4px solid",
            width: "500px",
            margin: "5px",
            padding: "10px",
            backgroundColor: "rgb(58, 57, 57)",
            color: "rgba(179, 166, 166, 0.767)",
            borderRadius: "25px",
        }
    }

    editStyle = () => {
        return {
            backgroundColor: "rgba(255, 255, 20, 0.7)",
            borderRadius: "25px",
            border: 'none',
            width: '70px',
            height: '25px',
            fontSize: '20px'
        }
    }

    deleteStyle = () => {
        return {
            backgroundColor: "rgba(255, 0, 0, 0.76)",
            float: "right",
            borderRadius: "25px",
            width: '80px',
            height: '25px',
            border: 'none',
            fontSize: '20px'
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/movies">
                        <button className="back-button">&#x21D0;</button>
                    </Link>
                </div>
                <div style={this.movieStyle()}>
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
                            <button style={this.editStyle()}>edit</button>
                        </Link>

                        <Link to={`/movies/${this.state.moviesdata.id}/delete`}>
                            <button style={this.deleteStyle()}>delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetail;