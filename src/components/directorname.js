import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Directorname extends Component {

    directorstyle = () => {
        return {
            border: "2px solid red",
            width: "200px",
            margin: "10px",
            padding: "10px",
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
            <div className="directorname" position={this.props.name.id} style={this.directorstyle()}>

                <p><b>Id : </b>{this.props.name.id}</p>
                <p><b>Director : </b>{this.props.name.name}</p>

                <Link to={`/directors/${this.props.name.id}/edit`}>
                    <button style={this.editstyle()} onClick={this.props.onedit}>edit</button>
                </Link>

                <Link to={`/directors/${this.props.name.id}/delete`}>
                    <button style={this.deletestyle()} onClick={this.props.ondelete}>delete</button>
                </Link>
            </div>
        );
    }
}

export default Directorname;