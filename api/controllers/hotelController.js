import Hotels from '../Schemas/Hotels.js'

export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotels(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(error){
        next(error)
    }
}

export const updateHotel = async(req, res, next)=>{
    try{
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        //$set will update whatever we are requesting to update, and new is true will allow it to show up in your json in postman
        res.status(200).json(updatedHotel)
    }catch(error){
        next(error)
    }
}

export const deleteHotel = async(req, res, next) =>{
    try{
        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel information has been deleted')
    } catch(error){
        next(error)
    }
}

export const getOneHotel = async (req,res,next)=>{
    try {
        const oneHotel = await Hotels.findById(req.params.id);
        res.status(200).json(oneHotel)

    }catch(error){
        next(error)
    }
}

export const getAllHotels = async(req,res,next)=>{
    try{
        const allHotels = await Hotels.find();
        res.status(200).json(allHotels)
    }catch(error){
        next(error)
    }
}