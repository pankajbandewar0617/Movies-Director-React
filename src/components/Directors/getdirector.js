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
        })
            .then(() => this.getAllDirector())
            .catch(error => {
                console.log(error);
            })
    }

    // add = async data => {
    //     console.log('add');
    //     const addUrl = 'http://localhost:9000/directors';
    //     await fetch(addUrl, {
    //         method: 'POST',
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }).then(res => res.json())
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     this.componentDidMount();
    // };


    // editDirector = (id, data) => {
    //     console.log('edit');
    //     const id = e.target.parentElement.parentElement.getAttribute('position');
    //     console.log(id);
    //     const editUrl = `http://localhost:9000/directors/${id}`
    //     await fetch(editUrl, {
    //         method: 'PUT',
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });


    // };


    // addstyle = () => {
    //     return {
    //         backgroundColor: 'green'
    //     };
    // };

    // // add code

    // addNewData = async data => {
    //     await fetch("http://localhost:8080/api/directors", {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     this.componentDidMount();
    // };

    // //////////////////////////////////////

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

                    <Link to="/movies/new">
                        <button id="addButton" style={this.addstyle()} onClick={this.add}>add movies</button>
                    </Link>
                </div>
                {/* <DirectorAdd name={this.state.names} /> */}
                {/* <Link to="/directors/new">
                    <button style={this.addstyle()} onClick={this.add}>add directors</button>
                </Link>
                <Switch>
                    <Route
                        path="/directors/new"
                        component={() => <DirectorAdd onAdd={this.addNewData} name={this.state.directors} />}
                    />
                </Switch> */}

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
