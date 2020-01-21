import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Directorname extends Component {

    directorstyle = () => {
        return {
            border: "4px solid",
            width: "300px",
            fontSize: "16px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "rgb(58, 57, 57)",
            color: "rgba(179, 166, 166, 0.767)",
            borderRadius: "25px",
            lineHeight: "20px"
        }
    }

    render() {
        return (
            <div className="directorname" position={this.props.name.id} style={this.directorstyle()}>
                <Link to={`/directors/${this.props.name.id}`}>
                    <p><b>Id : </b>{this.props.name.id}</p>
                </Link>
                <p><b>Director : </b>{this.props.name.name}</p>
            </div >
        );
    }
}

export default Directorname;