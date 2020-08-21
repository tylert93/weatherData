import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name:String,
    lat:Number,
    lon:Number,
    OWMKey:Number
});

export const Destination = mongoose.model("Destination", destinationSchema);