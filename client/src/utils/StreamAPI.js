import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('api/stream/sources');
  },
  getGenres: function() {
    return axios.get('api/stream/genres');
  },
  getTitles: function(params) {
    return axios.get('api/stream/titles', { params: params });
  }
};