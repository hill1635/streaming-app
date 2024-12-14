const { default: axios } = require("axios");
var qs = require('qs');

module.exports = {
  getSources: function (req, res) {
    axios.get('https://api.watchmode.com/v1/sources/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.error('Error getting sources:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the sources' });
      });
  },
  getNetworks: function (req, res) {
    axios.get('https://api.watchmode.com/v1/networks/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.error('Error getting sources:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the sources' });
      });
  },
  getGenres: function (req, res) {
    axios.get('https://api.watchmode.com/v1/genres/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.error('Error getting genres:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the genres' });
      });
  },
  getTitle: function (req, res) {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/find/' + req.params.id,
      params: {external_source: 'imdb_id'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN
      }
    };
    
    axios
      .request(options)
      .then((response) => {
        const result = Object.values(response.data).flat();
        const data = result[0];
        const title = {
          id: data.id,
          title: data.name || data.title,
          description: data.overview,
          date: (data.release_date || data.first_air_date)?.split('-')[0],
          imgSrc: "https://image.tmdb.org/t/p/original" + data.poster_path,
        };
        res.json(title);
      })
      .catch((err) => {
        console.error('Error getting title:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the title' });
      });
  },
  getTitleDetails: function (req, res) {
    axios.get('https://api.watchmode.com/v1/title/' + req.params.id + '/details/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY)
      .then((response) => {
        const data = response.data;
        const titleDetails = {
          critic_score: data.critic_score,
          genres: data.genre_names,
          networks: data.network_names,
          similar_titles: data.similar_titles,
          type: data.type,
          user_rating: data.user_rating,
        };
        res.json(titleDetails);
      })
      .catch((err) => {
        console.error('Error getting title details:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the title details' });
      });
  },
  getTitles: function (req, res) {
    const paramsUrl = qs.stringify(req.query, { arrayFormat: 'comma' });
    axios.get('https://api.watchmode.com/v1/list-titles/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY + "&" + paramsUrl)
      .then((response) => {
        res.json(response.data.titles);
      })
      .catch((err) => {
        console.error('Error getting titles:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the titles' });
      }
    );
  },
};