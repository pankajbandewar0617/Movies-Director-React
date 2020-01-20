import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditMovie extends Component {

    state = {
        moviedata: []
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getMovie(id);
    }

    getMovie(id) {
        const getMovieById = `http://localhost:9000/movies/${id}`;
        fetch(getMovieById, {
            method: 'GET'
        })
            .then(movies => movies.json())
            .then(data => this.setState({ moviedata: data }));
    }

    SubmitDetails = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const title = e.target[0].value;
        const description = e.target[1].value;
        const runtime = e.target[2].value;
        const genre = e.target[3].value;
        const rating = e.target[4].value;
        const metascore = e.target[5].value;
        const votes = e.target[6].value;
        const gross = e.target[7].value;
        const director = e.target[8].value;
        const actor = e.target[9].value;
        const year = e.target[10].value;

        const data = {
            title: title,
            description: description,
            runtime: runtime,
            genre: genre,
            rating: rating,
            metascore: metascore,
            votes: votes,
            gross: gross,
            director: director,
            actor: actor,
            year: year
        };
        this.editMovie(id, data);
        return;
    };

    editMovie = (id, data) => {
        const url = `http://localhost:9000/movies/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const {
            title,
            description,
            runtime,
            genre,
            rating,
            metascore,
            votes,
            gross,
            director,
            actor,
            year
        } = this.state.moviedata;

        return (
            <div>
                <Link to="/movies">
                    <button className="close-button">&#x21D0;</button>
                </Link>
                <div className="movie-add">
                    <h3>Add Movie Details</h3>
                    <form onSubmit={this.SubmitDetails}>
                        <div>
                            <p>
                                <b>Title : </b>
                                <input
                                    type="text"
                                    defaultValue={title}
                                    placeholder="Enter Movie Name..."
                                    required
                                />
                            </p>
                            <p>
                                <b>Description : </b>
                                <input
                                    type="text"
                                    defaultValue={description}
                                    placeholder="Movie Description"
                                    required
                                />
                            </p>
                            <p>
                                <b>Runtime : </b>
                                <input
                                    type="number"
                                    defaultValue={runtime}
                                    placeholder="In Minutes.."
                                    required
                                />
                            </p>
                            <p>
                                <b>Genre : </b>
                                <input
                                    type="text"
                                    defaultValue={genre}
                                    placeholder="Genre Type"
                                />
                            </p>
                            <p>
                                <b>Rating : </b>
                                <input
                                    type="number"
                                    defaultValue={rating}
                                    placeholder="Out of 10"
                                    required
                                />
                            </p>
                            <p>
                                <b>Metascore : </b>
                                <input
                                    type="number"
                                    defaultValue={metascore}
                                    placeholder="Out of 100"
                                    required
                                />
                            </p>
                            <p>
                                <b>Votes : </b>
                                <input
                                    type="number"
                                    defaultValue={votes}
                                    placeholder="Total Votes.."
                                    required
                                />
                            </p>
                            <p>
                                <b>Gross In Millions : </b>
                                <input
                                    type="number"
                                    defaultValue={gross}
                                    placeholder="Millions USD"
                                    required
                                />
                            </p>
                            <p>
                                <b>Director : </b>
                                <input
                                    type="text"
                                    defaultValue={director}
                                    placeholder="Enter Director Name..."
                                    required
                                />
                            </p>
                            <p>
                                <b>Actor : </b>
                                <input
                                    type="text"
                                    defaultValue={actor}
                                    placeholder="Actor / Actress"
                                    required
                                />
                            </p>

                            <p>
                                <b>Year : </b>
                                <input
                                    type="number"
                                    defaultValue={year}
                                    placeholder="YYYY"
                                    required
                                />
                            </p>
                        </div>
                        <button>update</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditMovie;
