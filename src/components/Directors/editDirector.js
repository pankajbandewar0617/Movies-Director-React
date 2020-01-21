import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DirectorEdit extends Component {

    state = {
        director: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getDirector(id)
    }

    getDirector(id) {
        const getDirectorById = `http://localhost:9000/directors/${id}`;
        fetch(getDirectorById, {
            method: 'GET'
        })
            .then(data => data.json())
            .then(name => this.setState({ director: name }));
    }

    takeInput = event => {
        this.setState({
            director: event.target.value
        });
    };

    passValue = event => {
        const id = this.props.match.params.id
        event.preventDefault();
        event.target.parentNode.children[1].value = ''
        if (this.state.director) {
            this.directorEdit(id, this.state)
            this.setState({
                director: ''
            })
        };
    }

    directorEdit = (id, data) => {
        const url = `http://localhost:9000/directors/${id}/edit`;
        fetch(url, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const { name } = this.state.director
        const id = this.props.match.params.id
        return (
            <div>
                <Link to={`/directors/${id}`}>
                    <button className="back-button">&#x21D0;</button>
                </Link>
                <div className="director-add">
                    <h3>Change Director Name</h3>
                    <form onSubmit={this.passValue}>
                        <div>
                            <b>Director : </b>
                            <input
                                type="text"
                                defaultValue={name}
                                placeholder="Enter Director Name..."
                                onChange={this.takeInput}
                                required
                            />
                            <button onClick={this.passValue}>add</button></div>
                    </form>
                </div>
            </div >
        );
    }
}

export default DirectorEdit;