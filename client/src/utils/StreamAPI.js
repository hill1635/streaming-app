import axios from 'axios';
import { get } from 'mongoose';

export default {
  getSources: function() {
    return axios.get('api/stream/sources');
  },
  getGenres: function() {
    return axios.get('api/stream/genres');
  },
  getTitle: function(id) {
    return axios.get('api/stream/title/' + id);
  },
  getTitles: function(params) {
    return axios.get('api/stream/titles', { params: params });
  }
};