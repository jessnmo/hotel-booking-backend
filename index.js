import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import hotelsRoute from './api/routes/hotels.js'
import hotelRoomsRoute from './api/routes/hotelRooms.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const connect = async() =>{
try {
  await mongoose.connect(process.env.MONGO);
  console.log('Connected to MongoDB');
} catch (error) {
  throw error
}
}

mongoose.connection.on('disconnected',()=>{
    console.log("mongoDB disconnected");
})

//middleWares
app.use(cookieParser())
app.use(express.json()) 
app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/hotels', hotelsRoute)
app.use('/hotelRooms', hotelRoomsRoute)
app.use((error, req, res, next)=>{
  const errorStatus = error.status || 500 //const errorStatus otherwise will be 500
  const errorMessage = error.message || 'ERROR'
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:error.stack
  })
})


app.get('/', (req,res)=>{
    res.send('test main page')
})

app.listen(8080, ()=>{
    connect()
    console.log('Server running on http://localhost:8080')
})