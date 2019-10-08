import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PopularMovies from './PopularMovies';
import SearchResults from './SearchResults';
import MovieDetail from './MovieDetail';
import ActorDetail from './ActorDetail';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <Router>
      <div className="ui container">
        <Link className="home-link" to="/"><h1>Films Galore</h1></Link>
        <SearchBar />
          <div className="main">          
            <Switch>
              <Route exact path="/" component={PopularMovies} />
              <Route path="/movie/:id" component={MovieDetail} />
              <Route path="/actor/:id" component={ActorDetail} />
              <Route path="/searchResults" component={SearchResults} />
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default App;