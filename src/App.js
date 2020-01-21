import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Directors from './components/Directors/getAllDirector';
import DirectorDetail from './components/Directors/getSingleDirector';
import DirectorEdit from './components/Directors/editDirector';
import AddDirector from './components/Directors/addDirector.js';
import DirectorDelete from './components/Directors/deleteDirector';
import Movies from './components/Movies/getAllMovie';
import Moviedetail from './components/Movies/getSingleMovie';
import DeleteMovie from './components/Movies/deleteMovie';
import AddMovie from './components/Movies/addMovie';
import EditMovie from './components/Movies/editMovie'

class App extends React.Component {

  render() {

    return (
      <div>
        <Router>
          <div className="home-page">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/directors" exact component={Directors} />
              <Route path="/directors/new" exact component={AddDirector} />
              <Route path="/directors/:id" exact component={DirectorDetail} />
              <Route path="/directors/:id/edit" exact component={DirectorEdit} />
              <Route path="/directors/:id/delete" exact component={DirectorDelete} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/movies/new" component={AddMovie} />
              <Route path="/movies/:id" exact component={Moviedetail} />
              <Route path="/movies/:id/edit" exact component={EditMovie} />
              <Route path="/movies/:id/delete" component={DeleteMovie} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
