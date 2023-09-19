import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/users
router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)

export { router }
