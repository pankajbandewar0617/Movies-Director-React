import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class Moviename extends Component {

    moviestyle = () => {
        return {
            border: "4px solid",
            width: "500px",
            margin: "5px",
            padding: "10px",
            backgroundColor: "rgb(58, 57, 57)",
            color: "rgba(179, 166, 166, 0.767)",
            borderRadius: "25px",
            fontSize: "14px",
            lineHeight: "16px",
        }
    }

    render() {
        return (
            <div className="moviename" position={this.props.data.id} style={this.moviestyle()}>

                <Link to={`/movies/${this.props.data.id}`}>
                    <p><b>Id : </b>{this.props.data.id}</p>
                </Link>
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
            </div>
        );
    }
}

export default Moviename;