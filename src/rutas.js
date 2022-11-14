
import express from 'express';
let router = express.Router()


router.get("/",(req,res) => {
    res.send("hola como estas waa123")
})

export default router