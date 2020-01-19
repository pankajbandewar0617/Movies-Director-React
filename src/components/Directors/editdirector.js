import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DirectorEdit extends Component {

    submit = (e) => {
        e.preventDefault()
        const name = e.target.firstElementChild.value   //e.target.children[0].value
        console.log(name)
        console.log(this.props)
    }
    render() {

        return (
            <div>
                <Link to="/directors"><p>Go Back</p></Link>
                <h3>edit director page</h3>
                <form onSubmit={this.submit}>
                    Name: <input placeholder="Director's Name" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default DirectorEdit;