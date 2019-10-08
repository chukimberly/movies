import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { id, title, release_date, overview, poster } = props;
  const year = release_date.substring(0,4);

  return (
    <div className="item">
      <div className="ui image">
        <Link to={`/movie/${id}`}>
          <img alt={title} src={`https://image.tmdb.org/t/p/w154/${poster}`} />
        </Link>
      </div>
      <div className="top aligned content">
        <Link className="header" to={`/movie/${id}`}>{title} ({year})</Link>
        <div className="description">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;