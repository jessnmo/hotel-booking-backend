import User from '../Schemas/Users.js';
import bcrypt from 'bcryptjs';
import {errorHandling} from '../ultis/errorHandling.js';
import jwt from "jsonwebtoken"

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
        if(!isCorrectPassword) return next(errorHandling(400, 'Wrong password, please try again'));

        const token = jwt.sign({id:existUser._id, isAdmin:existUser.isAdmin}, process.env.JWT)
        //this is processed after the password is showing correctly. we will create a new token, which will show which user is Admin
        // we are hashing this piece of information, and with each request, we will be able to identify who is admin 

        const {password, isAdmin, ...otherDetails} = existUser._doc; 
        //using ._doc is because all the user info is stored there when requesting log in
        //uses object destructuring to extract the password and isAdmin properties 
        //from the existUser object and assign them to the respective variables. 
        //The rest of the properties are gathered into the otherDetails object. 
        //This allows you to exclude the sensitive password and isAdmin fields when sending the response.
        res.cookie("access_token",token, {httpOnly:true}).status(201).json({...otherDetails})
    }catch(error){
        next(error)
    }
}