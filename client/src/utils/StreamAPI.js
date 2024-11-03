import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('api/stream/sources');
  },
  getGenres: function() {
    return axios.get('https://api.watchmode.com/v1/genres/?apiKey=aoUc11xXQMI613fqy7MSRPXPIjjYEplLRXcmhRE4');
  },
};