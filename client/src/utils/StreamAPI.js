import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('https://api.watchmode.com/v1/sources/?types=sub&apiKey=aoUc11xXQMI613fqy7MSRPXPIjjYEplLRXcmhRE4');
  },
  getGenres: function() {
    // return axios.get('https://api.watchmode.com/v1/genres/?apiKey=' + process.env.REACT_APP_WATCHMODE_API_KEY);
  },
};