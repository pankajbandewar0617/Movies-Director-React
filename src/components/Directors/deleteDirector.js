import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class DirectorDelete extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.deleteDirector(id)
        console.log(id)
    }

    deleteDirector = (id) => {
        const url = `http://localhost:9000/directors/${id}/delete`;
        fetch(url, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Link to="/directors">
                    <button className="back-button">&#x21D0;</button>
                </Link>

                <p style={{ fontSize: '40px', marginTop: '50px' }}>{`Your Director data with this id : ${this.props.match.params.id} is deleted. `}</p>
            </div>
        );
    }
}

export default DirectorDelete;