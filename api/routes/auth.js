import express from 'express'
import { register } from '../controllers/authController.js';

const router = express.Router();

//creating all endpoints
router.post("/register", register);

export default router