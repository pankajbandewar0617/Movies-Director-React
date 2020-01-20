import React, { Component } from 'react';
import Directorname from './directorname';
import { Link } from 'react-router-dom';

class Directors extends Component {
    state = {
        directors: []
    };

    componentDidMount() {
        this.setState({
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
        }).then(directorData => this.setState({ directors: directorData }));
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
                        <button className="close-button">&#x21D0;</button>
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
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default Directors;
