const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name:String,
    lat:Number,
    lon:Number,
    OWMKey:Number
});

module.exports = mongoose.model("Destination", destinationSchema);