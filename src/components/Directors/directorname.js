import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DirectorAdd from './adddirector';
// import DirectorEdit from './editdirector';
// import DirectorDelete from './deletedirector'

class Directorname extends Component {

    directorstyle = () => {
        return {
            border: "4px solid pink",
            width: "300px",
            fontSize: "16px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "25px",
            lineHeight: "20px",
        }
    }

    editstyle = () => {
        return {
            backgroundColor: "yellow",
            borderRadius: "25px",
        }
    }

    deletestyle = () => {
        return {
            backgroundColor: "red",
            borderRadius: "25px",
            float: "right"
        }
    }

    deleteDirector = (e) => {
        e.preventDefault()
        const id = e.target.parentElement.parentElement.parentElement.getAttribute('position')
        console.log(id)
        // this.props.ondelete(id)
    }

    edit = () => {
        console.log('edit remaining')
    }

    render() {
        return (
            <div className="directorname" position={this.props.name.id} style={this.directorstyle()}>
                <Link to={`/directors/${this.props.name.id}`}>
                    <button>detail</button>
                </Link>

                <p><b>Id : </b>{this.props.name.id}</p>
                <p><b>Director : </b>{this.props.name.name}</p>

                <div>
                    {/* <Link to={`/directors/${this.props.name.id}/edit`}> */}
                    <button style={this.editstyle()} onClick={this.edit}>edit</button>
                    {/* </Link> */}

                    <Link to={`/directors/${this.props.name.id}/delete`}>
                        <p>delete</p>
                        <button style={this.deletestyle()} onClick={this.deleteDirector}>delete</button>
                    </Link>
                </div>
            </div >
        );
    }
}

export default Directorname;