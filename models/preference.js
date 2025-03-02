const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
  type: String,
  values: [Number],
  userCount: Number,
});

const Preference = mongoose.model('Preference', PreferenceSchema);

module.exports = Preference;