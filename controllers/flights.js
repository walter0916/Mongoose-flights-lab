import { Flight } from "../models/flight.js";

function newFlight(req, res) {
  res.render('flights/new', {
    title: "New Flight"
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flights => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index' , {
      flights: flights,
      title: 'Flights List'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function show(req, res) {
  Flight.findById(req.params.flightsId)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

export {
  newFlight as new,
  create,
  index,
  show
}