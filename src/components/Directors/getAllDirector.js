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
        }).then(directorData => {
            // console.log(directorData)
            this.setState({ directors: directorData })
        });
    }

    addstyle = () => {
        return {
            backgroundColor: "rgb(92, 182, 65)",
            borderRadius: "25px",
            width: "130px",
            height: "40px",
            fontSize: "20px",
            color: "navy",
            border: 'none',
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">
                        <button className="back-button">&#x21D0;</button>
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
