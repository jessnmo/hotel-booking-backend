//reminder for myself: add '.js' for the file name when using import method 
import express from 'express'
import { createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel } from '../controllers/hotelController.js'

const router = express.Router()

//Post. create a hotel 
router.post('/', createHotel)

//Update
router.put('/:id', updateHotel)

//Delete
router.delete('/:id', deleteHotel)

//Get 
router.get('/:id', getOneHotel)

//Get All 
router.get('/', getAllHotels)

export default router