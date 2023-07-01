import express from 'express'

const router = express.Router();

//creating all endpoints
router.get("/", (req, res)=>{
    res.send('test auth endpoint')
})

export default router