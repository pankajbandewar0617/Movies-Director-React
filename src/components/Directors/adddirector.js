import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorAdd extends Component {
    state = {
        director_name: ''
    };
    takeInput = event => {
        console.log(event.target.value)
        this.setState({
            director_name: event.target.value
        });
    };

    passValue = event => {
        event.preventDefault();
        console.log(this.state)
        if (this.state.director_name.length > 0) {
            console.log('add')
            console.log(this.state)
            console.log(this)
            // this.props.onAdd('director')
            // this.props.addNewData(this.state);
            // this.setState({
            //     director_name: ''
            // });
        }
        return;
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

export default DirectorAdd;
