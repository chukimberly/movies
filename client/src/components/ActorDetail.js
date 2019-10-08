import './ActorDetail.css';
import React, { Component } from 'react';
import api from '../api';

class ActorDetail extends Component {
  state = { actor: null };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    try {
      const actor = await this.getActorDetails(id);
      this.setState({ actor });
    } catch (err) {
      console.log(err);
    }
  };

  getActorDetails = async (id) => {
    const response = await api.get(`/actor/${id}`);
    return response.data;
  }

  render() {
    const { actor } = this.state;

    if(!actor) {
      return (
        <div className="ui loading segment">
        </div>
      );
    }

    const {
      name,
      birthday,
      place_of_birth,
      deathday,
      biography,
      profile_path
    } = actor;

    return (
      <div className="actor-detail ui grid">
        <div className="five wide column">
          <div className="ui medium image">
            <img alt={name} src={`https://image.tmdb.org/t/p/h632/${profile_path}`} />
          </div>
        </div>
        <div className="eleven wide column">
          <h2 className="header">{name}</h2>
          <div className="actor-info">
            <div className="personal-info">
              <p><strong>Born: </strong>{birthday}</p>
              <p><strong>Place of Birth: </strong>{place_of_birth}</p>
              {deathday ? <p><strong>Died: </strong>{deathday}</p> : ''}
            </div>
            <div className="bio">
              <p>{biography}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActorDetail;