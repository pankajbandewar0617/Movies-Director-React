import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class Moviename extends Component {

    moviestyle = () => {
        return {
            border: "4px solid pink",
            width: "500px",
            margin: "5px",
            padding: "10px",
            fontSize: "14px",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "25px",
            lineHeight: "16px",
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
            <div className="moviename" position={this.props.data.id} style={this.moviestyle()}>

                <Link to={`/movies/${this.props.data.id}`}>
                    <button>detail</button>
                </Link>

                <p><b>Id : </b>{this.props.data.id}</p>
                <p><b>Title : </b>{this.props.data.title}</p>
                <p><b>Actor : </b>{this.props.data.actor}</p>
                <p><b>Description : </b>{this.props.data.description}</p>
                <p><b>Genre : </b>{this.props.data.genre}</p>
                <p><b>Rating : </b>{this.props.data.rating}</p>
                <p><b>Gross : </b>{this.props.data.gross} million $</p>
                <p><b>Metascore : </b>{this.props.data.metascore}</p>
                <p><b>Runtime : </b>{this.props.data.runtime}</p>
                <p><b>Votes : </b>{this.props.data.votes}</p>
                <p><b>Director : </b>{this.props.data.director}</p>
                <p><b>Year : </b>{this.props.data.year}</p>
                <div>
                    <Link to={`/movies/${this.props.data.id}/edit`}>
                        <button style={this.editstyle()}>edit</button>
                    </Link>

                    <Link to={`/movies/${this.props.data.id}/delete`}>
                        <button style={this.deletestyle()}>delete</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Moviename;