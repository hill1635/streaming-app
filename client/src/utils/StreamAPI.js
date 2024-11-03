import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('api/stream/sources');
  },
  getGenres: function() {
    return axios.get('api/stream/genres');
  },
};