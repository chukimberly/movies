import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../api';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const response = await api.get('/search', {
      params: { 
        query: this.state.term
      }
    });

    this.props.history.push(
      '/searchResults', 
      { 
        term: this.state.term, 
        movies: response.data.results 
      }
    );
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Search for movies by title"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);