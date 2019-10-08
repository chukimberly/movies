import './CastCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CastCard = (props) => {
  const { id, name, character, profile } = props;
  return (
    <div className="cast-card ui card">
      <Link className="image" to={`/actor/${id}`}>
        <img alt={name} src={`https://image.tmdb.org/t/p/w185/${profile}`} />
      </Link>
      <div className="content">
        <p className="header">{name}</p>
        <div className="description">
          {character}
        </div>
      </div>
    </div>
  );
};

export default CastCard;