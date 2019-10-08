import './MovieDetail.css';
import React, { Component } from 'react';
import api from '../api';
import CastCard from './CastCard';

class MovieDetail extends Component {
  state = { details: null, credits: null };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    try {
      const details = await this.getMovieDetails(id);
      const credits = await this.getMovieCredits(id);
      this.setState({ details, credits });
    } catch (err) {
      console.log(err);
    }
  };

  getMovieDetails = async (id) => {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  }

  getMovieCredits = async (id) => {
    const response = await api.get(`/movie/${id}/credits`);
    return response.data;
  }

  render() {
    const { details, credits } = this.state;

    if(!details) {
      return (
        <div className="ui loading segment">
        </div>
      );
    }

    const {
      title,
      overview,
      genres,
      runtime,
      release_date,
      poster_path
    } = details;

    const topCast = credits.cast.slice(0,5);
    const castCards = topCast.map(actor => {
      const { id, name, character, profile_path } = actor;
      return (
        <CastCard
          key={id}
          id={id}
          name={name}
          character={character}
          profile={profile_path}
        />
      );
    });

    const director = credits.crew.find(crewMember => {
      const { department, job } = crewMember;
      return department === 'Directing' && job === 'Director';
    });

    const year = release_date.substring(0,4);
    const formattedRuntime = `${Math.floor(runtime / 60)} hr ${runtime % 60} min`;
    const formattedGenres = genres.map(genre => genre.name).join(', ');

    return (
      <div className="movie-detail">
        <div className="ui grid">
          <div className="five wide column">
            <img alt={title} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
          </div>
          <div className="eleven wide column">
            <h2 className="header">{title} ({year})</h2>
            <div className="description">
              <div className="overview">
                <h3>Synopsis</h3>
                <p>{overview}</p>
              </div>
              <div className="info">
                <h3>Info</h3>
                <p><strong>Release Date: </strong>{release_date}</p>
                <p><strong>Runtime: </strong>{formattedRuntime}</p>
                <p><strong>Genre(s): </strong>{formattedGenres}</p>
                <p><strong>Director: </strong>{director.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="cast">
          <h2>Top Cast</h2>
          <div className="ui cards">
            {castCards}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;