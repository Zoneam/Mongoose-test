const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    releseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
});


module.exports = mongoose.model('Movie', movieSchema);