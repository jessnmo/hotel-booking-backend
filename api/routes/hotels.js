import express from 'express'
import Hotels from '../Schemas/Hotels.js'

const router = express.Router()

//Post. create a hotel 
router.post('/', async (req, res)=>{
const newHotel = new Hotels(req.body)

try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
    
} catch (error){
    res.status(500).json(error)
}
})

//Update
//Delete
//Get 
//Get All 

export default router