import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        console.log(this.state)
        console.log(4637487)
        if (this.state.director.length > 0) {
            console.log(this.state)
            this.edit(this.state)
            console.log(this.edit)
            console.log(this)
        }
    };
    // submit = (e) => {
    //     e.preventDefault()
    //     // console.log(4334)
    //     const name = e.target.firstChild.value  //e.target.children[0].value
    //     // const id = e.target.parentNode.parentNode.parentNode
    //     // console.log(id)
    //     // console.log(name)
    //     // console.log(this.props.match.url)
    //     this.edit(name);
    // }
    // this.edit(this.state)
    // const data = state

    edit = data => {
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
        // this.componentDidMount();
    };

    render() {

        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h3>edit director page</h3>
                <div>Director Name</div>
                <form onSubmit={this.passValue}>
                    <input
                        onChange={this.takeInput}
                        type="text"
                        name="name"
                        placeholder="Enter Director Name..."
                        required
                    />
                </form>
                <button type="submit" onClick={this.passValue}>Submit</button>
            </div>
        );
    }
}

export default DirectorEdit;