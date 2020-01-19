import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddDirector extends Component {
    state = {
        name: ''
    };

    takeInput = event => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        });
    };

    passValue = event => {
        event.preventDefault();
        console.log(this.state)
        if (this.state.name.length > 0) {
            console.log('add')
            console.log(this.state)
            this.add(this.state)
        }
        return;
    };

    add = data => {
        console.log('add');
        console.log(data)
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
// render() {
// return (
// <h2>fine</h2>

// <div>
//     <Link to="/directors"><p>Go Back</p></Link>
//     <h1>Add Director Page</h1>
//     <form>
//         Name: <input placeholder="Director's Name" />
//     </form>
// </div>
// );
// }

export default AddDirector;
