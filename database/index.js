const mongoose = require('mongoose');
mongoose.connect(`${process.env.CONNECT}`);
mongoose.promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('we are connected!')
})

const tripSchema = new mongoose.Schema({
  email: String,
  cities: Array,
  parks: Array
});

const Trip = mongoose.model('Trip', tripSchema);

const save = trip => {
  let journey = new Trip({ email: trip.email, cities: trip.cities, parks: trip.parks });
  journey.save();
}

module.exports.trip = Trip;
module.exports.save = save;