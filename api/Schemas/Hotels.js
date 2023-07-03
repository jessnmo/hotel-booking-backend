import mongoose from 'mongoose';


const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    }, //this is the hotel type: hotel/motel/villa etc
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    images:{
        type:[String] // it will be multiple images, in an array, each item in array will be a string
    },
    description:{
        type:String,
        required:true
    },
     rating:{
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
        type:[String]
    },
    distance:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
    
})

export default mongoose.model('Hotels', HotelSchema)