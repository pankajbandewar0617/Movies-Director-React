import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddDirector extends Component {
    state = {
        name: ''
    };

    takeInput = event => {
        this.setState({
            name: event.target.value
        });
    };

    passValue = event => {
        event.preventDefault();
        if (this.state.name.length > 0) {
            this.add(this.state)
        }
    };

    add = data => {
        const addUrl = 'http://localhost:9000/directors';
        fetch(addUrl, {
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
        // this.componentDidMount();
    };


    render() {
        return (
            <div className="popup-add-container">
                <div className="popup">
                    <Link to="/directors">
                        <button className="close-button">X</button>
                    </Link>
                    <h3>Add New Director</h3>
                    <div className="add-form">
                        <div>Director Name</div>
                        <form onSubmit={this.passValue}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Director Name..."
                                onChange={this.takeInput}
                                required
                            />
                        </form>
                    </div>
                    <button type="submit" onClick={this.passValue}>
                        Submit
          </button>
                </div>
            </div>
        );
    }
}

export default AddDirector;
