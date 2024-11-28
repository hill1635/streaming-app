import axios from 'axios';

export default {
  getSources: function() {
    return axios.get('api/stream/sources');
  },
  getNetworks: function() {
    return axios.get('api/stream/networks');
  },
  getGenres: function() {
    return axios.get('api/stream/genres');
  },
  getTitle: function(id) {
    return axios.get('api/stream/title/' + id);
  },
  getTitleDetails: function(id) {
    return axios.get('api/stream/titleDetails/' + id);
  },
  getTitles: function(params) {
    return axios.get('api/stream/titles', { params: params });
  }
};