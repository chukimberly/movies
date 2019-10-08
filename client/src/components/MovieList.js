import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const movies = props.movies.map(({id, title, release_date, overview, poster_path}) => {
    return (
      <MovieCard
        key={id}
        id={id}
        title={title}
        release_date={release_date}
        overview={overview}
        poster={poster_path} 
      />
    );
  });

  return (
    <div className="ui divided items">
      {movies}
    </div>
  );
}

export default MovieList;