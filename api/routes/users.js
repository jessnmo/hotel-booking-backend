import express from 'express'
import { updateUser,deleteUser,getOneUser, getAllUsers } from '../controllers/userController.js'

const router= express.Router()


//Update
router.put('/:id', updateUser)

//Delete
router.delete('/:id', deleteUser)

//Get 
router.get('/:id', getOneUser)

//Get All 
router.get('/', getAllUsers)

export default router

