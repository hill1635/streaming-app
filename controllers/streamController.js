const { default: axios } = require("axios");

module.exports = {
  getSources: function (req, res) {
    axios.get('https://api.watchmode.com/v1/sources/?types=sub&apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY)
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
  }
};