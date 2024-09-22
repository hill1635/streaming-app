import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('https://api.watchmode.com/v1/sources/?types=sub&apiKey=' + process.env.REACT_APP_WATCHMODED_API_KEY);
  },
};