import React from 'react';
import MovieList from './MovieList';

const SearchResults = (props) => {
  const { term, movies } = props.location.state;
  return (
    <div>
      <h2>Results for "{term}"</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResults;