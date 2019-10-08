require('dotenv').config();
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 8080;

const baseApiUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_API_KEY;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// get popular movies
app.get('/popular', (req, res) => {
  try {
    request.get({
      url: `${baseApiUrl}/movie/popular?api_key=${apiKey}`,
      headers: {
        "content-type": "application/json"
      }
    }, (err, response, body) => {
      //title: movie.title, poster_path: movie.poster_path, id: movie.id
      res.send(body);
    });
  } catch (err) {
    res.send(err);
  }
});

// search for movies
app.get('/search', (req, res) => {
  try {
    request.get({
      url: `${baseApiUrl}/search/movie/?api_key=${apiKey}&query=${req.query.query}`,
      headers: {
        "content-type": "application/json"
      }
    }, (err, response, body) => {
      res.send(body);
    });
  } catch (err) {
    res.send(err);
  }
});

// get movie by ID
app.get('/movie/:id', (req, res) => {
  try {
    request.get({
      url: `${baseApiUrl}/movie/${req.params.id}?api_key=${apiKey}`,
      headers: {
        "content-type": "application/json"
      }
    }, (err, response, body) => {
      res.send(body);
    });
  } catch (err) {
    res.send(err);
  }
});

// get cast and crew of a movie
app.get('/movie/:id/credits', (req, res) => {
  try {
    request.get({
      url: `${baseApiUrl}/movie/${req.params.id}/credits?api_key=${apiKey}`,
      headers: {
        "content-type": "application/json"
      }
    }, (err, response, body) => {
      res.send(body);
    });
  } catch (err) {
    res.send(err);
  }
});

// get actor by ID
app.get('/actor/:id', (req, res) => {
  try {
    request.get({
      url: `${baseApiUrl}/person/${req.params.id}?api_key=${apiKey}`,
      headers: {
        "content-type": "application/json"
      }
    }, (err, response, body) => {
      res.send(body);
    });
  } catch (err) {
    res.send(err);
  }
});