import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export { router }
