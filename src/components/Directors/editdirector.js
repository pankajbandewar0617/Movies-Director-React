import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DirectorEdit extends Component {

    state = {
        director: ''
    };

    takeInput = event => {
        this.setState({
            director: event.target.value
        });
    };

    passValue = event => {
        event.preventDefault();
        event.target.parentNode.children[1].value = ''
        if (this.state.director) {
            this.directorEdit(this.state)
            this.setState({
                director: ''
            })
        };
    }

    directorEdit = data => {
        const url = `http://localhost:9000${this.props.match.url}`;
        fetch(url, {
            method: 'PUT',
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
                <Link to="/directors/">
                    <button className="close-button">&#x21D0;</button>
                </Link>
                <div className="director-add">
                    <h3>Change Director Name</h3>
                    <form onSubmit={this.passValue}>
                        <div>
                            <b>Director : </b>
                            <input
                                type="text"
                                name="name"
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