import React, { Component } from 'react';
import Directorname from './directorname';
import { Link } from 'react-router-dom';

class Director extends Component {
    state = {
        director: []
    }

    componentDidMount() {
        this.getAllDirector()
    }


    getAllDirector() {
        fetch('http://localhost:9000/directors')
            .then(data => data.json())
            .then(directorData => this.setState({ director: directorData }))
    }

    add = () => {
        console.log('add')
    }

    edit = () => {
        console.log('edit')
    }

    delete = () => {
        console.log('delete')
    }

    addstyle = () => {
        return {
            backgroundColor: "green"
        }
    }

    render() {
        return (
            <div>
                <h2>All directors</h2>
                <Link to="/"><p>Go Back</p>
                </Link>

                <Link to="/directors/new">
                    <button style={this.addstyle()} onClick={this.add}>add director</button>
                </Link>
                {this.state.director.map((name) => (
                    <Directorname
                        name={name}
                        key={name.id}
                        onedit={this.edit}
                        ondelete={this.delete} />
                ))}
            </div>
        );
    }
}

export default Director;