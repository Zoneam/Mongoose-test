const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/samplemovies', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected' , ()=> {
    console.log(`Connected to MONGO DB ${db.host} : ${db.port}`);
})