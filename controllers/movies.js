const Movie = require('../models/movie')

module.exports = {
    new: newMovie,
    create
  };

function newMovie(req, res) {
    res.render('movies/new');
}

function create(req, res) {
// convert nowShowing's checkbox of nothing or "on" to boolean
req.body.nowShowing = !!req.body.nowShowing;
// remove any whitespace at start and end of cast
req.body.cast = req.body.cast.trim();
// split cast into an array if it's not an empty string - using a regular expression as a separator
if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
const movie = new Movie(req.body);
movie.save(function(err) {
  // one way to handle errors
  if (err) return res.render('movies/new');
  console.log(movie);
  // for now, redirect right back to new.ejs
  res.redirect('/movies/new');
});
}