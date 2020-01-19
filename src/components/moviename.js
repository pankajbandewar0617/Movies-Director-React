import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Moviename extends Component {

    moviestyle = () => {
        return {
            border: "2px solid red",
            width: "400px",
            margin: "10px",
            padding: "10px",
            fontSize: "12px"
        }
    }

    editstyle = () => {
        return {
            backgroundColor: "yellow",
        }
    }

    deletestyle = () => {
        return {
            backgroundColor: "red",
            float: "right"
        }
    }

    render() {
        return (
            <div className="moviename" position={this.props.data.id} style={this.moviestyle()}>

                {/* <Link to={`/movies/${this.props.data.id}`}> </Link> */}

                <p><b>Id : </b>{this.props.data.id}</p>
                <p><b>Title : </b>{this.props.data.title}</p>
                <p><b>Actor : </b>{this.props.data.actor}</p>
                <p><b>Description : </b>{this.props.data.description}</p>
                <p><b>Genre : </b>{this.props.data.genre}</p>
                <p><b>Rating : </b>{this.props.data.rating}</p>
                <p><b>Metascore : </b>{this.props.data.metascore}</p>
                <p><b>Runtime : </b>{this.props.data.runtime}</p>
                <p><b>Votes : </b>{this.props.data.votes}</p>
                <p><b>Director : </b>{this.props.data.director}</p>
                <p><b>Year : </b>{this.props.data.year}</p>

                <Link to={`/movies/${this.props.data.id}/edit`}>
                    <button style={this.editstyle()}>edit</button>
                </Link>

                <Link to={`/movies/${this.props.data.id}/delete`}>
                    <button style={this.deletestyle()}>delete</button>
                </Link>
            </div>
        );
    }
}

export default Moviename;