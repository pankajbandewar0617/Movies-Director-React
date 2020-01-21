import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DirectorDetail extends Component {

    state = {
        director: []
    };

    componentDidMount() {
        this.getDirector();
    }

    getDirector() {
        const getDirectorById = `http://localhost:9000${this.props.match.url}`;
        fetch(getDirectorById, {
            method: 'GET'
        })
            .then(data => data.json())
            .then(name => this.setState({ director: name }));
    }

    directorStyle = () => {
        return {
            border: '4px solid',
            width: '500px',
            margin: '5px',
            padding: '10px',
            backgroundColor: "rgb(58, 57, 57)",
            color: "rgba(179, 166, 166, 0.767)",
            borderRadius: "25px",
        };
    };

    editStyle = () => {
        return {
            backgroundColor: "rgba(255, 255, 20, 0.7)",
            borderRadius: "25px",
            border: 'none',
            width: '70px',
            height: '25px',
            fontSize: '20px',

        };
    };

    deleteStyle = () => {
        return {
            backgroundColor: "rgba(255, 0, 0, 0.76)",
            float: "right",
            borderRadius: "25px",
            width: '80px',
            height: '25px',
            border: 'none',
            fontSize: '20px'
        };
    };

    render() {
        return (
            <div>
                <div>
                    <Link to="/directors">
                        <button className="back-button">&#x21D0;</button>
                    </Link>
                </div>
                <div style={this.directorStyle()}>
                    <p>
                        <b>Id : </b>
                        {this.state.director.id}
                    </p>
                    <p>
                        <b>Director : </b>
                        {this.state.director.name}
                    </p>
                    <div>
                        <Link to={`/directors/${this.state.director.id}/edit`}>
                            <button style={this.editStyle()}>edit</button>
                        </Link>

                        <Link to={`/directors/${this.state.director.id}/delete`}>
                            <button style={this.deleteStyle()}>delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectorDetail;
