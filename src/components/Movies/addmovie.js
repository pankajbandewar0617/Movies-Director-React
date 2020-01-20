import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddMovie extends Component {
    state = {}

    SubmitDetails = e => {
        e.preventDefault();
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
        this.movieAdd(data);
        return;

    };

    movieAdd = data => {
        const url = 'http://localhost:9000/movies';
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .catch(err => {
                console.log(err);
            });

    };

    render() {
        return (
            <div>
                <Link to="/movies">
                    <button className="close-button">&#x21D0;</button>
                </Link>
                <div className="movie-add">
                    <h3>Add New Movie</h3>
                    <form onSubmit={this.SubmitDetails}>
                        <div>
                            <p>
                                <b>Title : </b>
                                <input
                                    type="text"
                                    placeholder="Enter Movie Name..."
                                    required
                                />
                            </p>
                            <p>
                                <b>Description : </b>
                                <input
                                    type="text"
                                    placeholder="Movie Description"
                                    required
                                />
                            </p>
                            <p>
                                <b>Runtime : </b>
                                <input
                                    type="number"
                                    placeholder="In Minutes.."
                                    required
                                />
                            </p>
                            <p>

                                <b>Genre : </b>
                                <select id="input-genre" selected="" required>
                                    <option value="">Select a Genre</option>
                                    <option value="Action">Action</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Mystery">Mystery</option>
                                </select>
                            </p>
                            <p>
                                <b>Rating : </b>
                                <input
                                    type="number"
                                    placeholder="Out of 10"
                                    required
                                />
                            </p>
                            <p>
                                <b>Metascore : </b>
                                <input
                                    type="number"
                                    placeholder="Out of 100"
                                    required
                                />
                            </p>
                            <p>
                                <b>Votes : </b>
                                <input
                                    type="number"
                                    placeholder="Total Votes.."
                                    required
                                />
                            </p>
                            <p>
                                <b>Gross In Millions : </b>
                                <input
                                    type="number"
                                    placeholder="Millions USD"
                                    required
                                />
                            </p>
                            <p>
                                <b>Director : </b>
                                <input
                                    type="text"
                                    placeholder="Enter Director Name..."
                                    required
                                />
                            </p>
                            <p>
                                <b>Actor : </b>
                                <input
                                    type="text"
                                    placeholder="Actor / Actress"
                                    required
                                />
                            </p>

                            <p>
                                <b>Year : </b>
                                <input
                                    type="number"
                                    placeholder="YYYY"
                                    required
                                />
                            </p>
                        </div>
                        <button>add</button>
                    </form>
                </div >
            </div >
        );
    }
}

export default AddMovie;