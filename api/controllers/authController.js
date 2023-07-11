import User from '../Schemas/Users.js';
import bcrypt from 'bcryptjs';
import {errorHandling} from '../ultis/errorHandling.js'

export const register = async(req, res,next)=>{
    try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    
    const newUser = new User({
      username:req.body.username,
      email:req.body.email,
      password:hash
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
}

export const login = async(req, res, next)=>{
    try{
        const existUser = await User.findOne({username:req.body.username});
        if(!existUser) return next(errorHandling(404, 'User Not Found.'));
        
        const isCorrectPassword = await bcrypt.compare(req.body.password, existUser.password)
        if(!isCorrectPassword) return next(errorHandling(400, 'Wrong password, please try again'))

        res.status(201).json(existUser)
    }catch(error){
        next(error)
    }
}