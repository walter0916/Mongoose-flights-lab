import mongoose from "mongoose";


const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String, 
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] 
  },
  flightNo: {
    type: Number, 
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}