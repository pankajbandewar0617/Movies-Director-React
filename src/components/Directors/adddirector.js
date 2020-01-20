import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

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
        event.target.parentNode.children[1].value = ''
        if (this.state.name) {
            this.directorAdd(this.state)
            this.setState({
                name: ''
            })
        }
    };

    // deleteDirector = async (id) => {
    //     const url = `http://localhost:9000/directors/${id}`;
    //     try {
    //         const res = await fetch(url, {
    //             method: "DELETE",
    //         });
    //         if (res.ok) {
    //             return res.json();
    //         }
    //         return this.getAllDirector();
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    directorAdd = data => {
        const url = 'http://localhost:9000/directors';
        fetch(url, {
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
        return (<div>
            <Link to="/directors">
                <button className="close-button">Go Back</button>
            </Link>
            <div className="director-add">
                <h3>Add New Director</h3>
                <form onSubmit={this.passValue}>
                    <div><b>Director : </b><input
                        type="text"
                        name="name"
                        placeholder="Enter Director Name..."
                        onChange={this.takeInput}
                    />
                        <button onClick={this.passValue}>add</button></div>
                </form>
            </div>
        </div >
        );
    }
}

export default AddDirector;
