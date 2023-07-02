import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import hotelsRoute from './api/routes/hotels.js'
import hotelRoomsRoute from './api/routes/hotelRooms.js'

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
app.use(express.json())
app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/hotels', hotelsRoute)
app.use('/hotelRooms', hotelRoomsRoute)


app.get('/', (req,res)=>{
    res.send('test main page')
})

app.listen(8080, ()=>{
    connect()
    console.log('Server running on http://localhost:8080')
})