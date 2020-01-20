import React, { Component } from 'react';
import Directorname from './directorname';
// import { Link } from 'react-router-dom';
// import DirectorAdd from './adddirector';
import { Link, Switch, Route } from 'react-router-dom'


class Director extends Component {
    state = {
        name: '',
        directors: []
    };

    componentDidMount() {
        this.setState({
            name: '',
            directors: []
        })
        this.getAllDirector();
    }

    getAllDirector() {
        fetch('http://localhost:9000/directors', {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        })
            .then(directorData => this.setState({ directors: directorData }));
    }

    deleteDirector = (id) => {
        const url = `http://localhost:9000/directors/${id}`;
        return fetch(url, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(() => this.getAllDirector())
            .catch(error => {
                console.log(error);
            })
    }

    addstyle = () => {
        return {
            backgroundColor: "green",
            borderRadius: "25px",
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">
                        <p>Go Back</p>
                    </Link>
                    <h2>All Directors</h2>

                    <Link to="/directors/new">
                        <button id="addButton" style={this.addstyle()}>add directors</button>
                    </Link>
                </div>

                <div className="all-directors">
                    {this.state.directors.map(name => (
                        <Directorname
                            name={name}
                            key={name.id}
                            onedit={this.editDirector}
                            ondelete={this.deleteDirector}
                        />
                    ))}
                </div>

            </div>
        );

    }
}
export default Director;
