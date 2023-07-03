//reminder for myself: add '.js' for the file name when using import method 
import express from 'express'
import Hotels from '../Schemas/Hotels.js'

const router = express.Router()

//Post. create a hotel 
router.post('/', async (req, res)=>{
const newHotel = new Hotels(req.body) //storing the new hotel information + display the existing ones 

try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel)
    
} catch (error){
    res.status(500).json(error)
}
})

//Update
router.put('/:id', async(req, res)=>{
    const {id} = req.params;

try{
    const updatedHotel = await Hotels.findByIdAndUpdate(id, {$set:req.body}, {new:true})//{new:true} tells that the updated value to return
    res.status(200).json(updatedHotel)
}catch(error){
    res.status(500).json(error)
}
})

//Delete
router.delete('/:id', async(req, res)=>{
const {id} = req.params;
try{
  await Hotels.findByIdAndDelete(id)
  res.status(200).json('hotel information deleted')
} catch(error){
    res.status(500).json(error)
}
})

//Get 
router.get('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const oneHotel = await Hotels.findById(id);
        res.status(200).json(oneHotel)
    }catch (error){
        res.status(500).json(error)
    }
})

//Get All 
router.get('/', async(req, res)=>{
    try{
        const allHotels = await Hotels.find();
        res.status(200).json(allHotels)
    }catch(error){
        res.status(500).json(error)
    }
})

export default router