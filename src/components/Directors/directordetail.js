import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'


class DirectorDetail extends Component {

    state = {
        director: []
    };

    componentDidMount() {
        this.getAllDirector();
    }

    getAllDirector() {
        const getDirectorById = `http://localhost:9000${this.props.match.url}`;
        fetch(getDirectorById, {
            method: 'GET'
        })
            .then(data => data.json())
            .then(name => this.setState({ director: name }));
    }

    directorstyle = () => {
        return {
            border: '4px solid pink',
            width: '500px',
            margin: '5px',
            padding: '10px',
            // fontSize: "14px",
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '25px'
            // lineHeight: "16px",
        };
    };

    editstyle = () => {
        return {
            backgroundColor: 'yellow',
            borderRadius: '25px',
        };
    };

    deletestyle = () => {
        return {
            backgroundColor: 'red',
            float: 'right',
            borderRadius: '25px'
        };
    };

    render() {
        return (
            <div>
                <div>
                    <Link to="/directors">
                        <p>Go Back</p>
                    </Link>
                </div>
                {/* {console.log(this.state.director)} */}
                <div style={this.directorstyle()}>
                    <p>
                        <b>Id : </b>
                        {this.state.director.id}
                    </p>
                    <p>
                        <b>Director : </b>
                        {this.state.director.name}
                    </p>
                    <div>
                        <Link to={`/movies/${this.state.director.id}/edit`}>
                            <button style={this.editstyle()}>edit</button>
                        </Link>

                        <Link to={`/movies/${this.state.director.id}/delete`}>
                            <button style={this.deletestyle()}>delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectorDetail;
