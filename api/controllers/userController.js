import Users from '../Schemas/Users.js'

export const updateUser = async(req, res, next)=>{
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser)
    }catch(error){
        next(error)
    }
}

export const deleteUser = async(req, res, next) =>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json('User information has been deleted')
    } catch(error){
        next(error)
    }
}

export const getOneUser = async (req,res,next)=>{
    try {
        const oneUser = await Users.findById(req.params.id);
        res.status(200).json(oneUser)

    }catch(error){
        next(error)
    }
}

export const getAllUsers = async(req,res,next)=>{
    try{
        const allUsers = await Users.find();
        res.status(200).json(allUsers)
    }catch(error){
        next(error)
    }
}