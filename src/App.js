import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home'
import Director from './components/getdirector'
import DirectorAdd from './components/adddirector'
import DirectorEdit from './components/editdirector'
import DirectorDelete from './components/deletedirector'
import Movies from './components/getmovies'
import Moviedetail from './components/moviedetail'


class App extends React.Component {

  render() {

    return (
      <Router>
        <div className="home-page">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/directors" exact component={Director} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={Moviedetail} />
            <Route path="/directors/new" component={DirectorAdd} />
            <Route path="/directors/:id/edit" component={DirectorEdit} />
            <Route path="/directors/:id/delete" component={DirectorDelete}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
