import React, { Component } from 'react';
import api from '../api';
import MovieList from './MovieList';

class PopularMovies extends Component {
  state = { movies: [] };

  componentDidMount = async () => {
    try {
      const response = await api.get('/popular');
      this.setState({ movies: response.data.results });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h2>Popular Movies</h2>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default PopularMovies;