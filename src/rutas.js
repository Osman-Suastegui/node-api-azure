
import express from 'express';
import {getconnection,sql} from './conexion.js'
let router = express.Router()


router.get("/",  (req,res) => {
    res.send("hola como estas waa123")
})


router.get('/obtenerPokemones', async (req, res) => {
    try {
        const pool = await getconnection();
        const result = await pool.request().query(`SELECT * FROM pokemones`)


        res.json(result.recordset)

    } catch (error) {
        res.send(error.message)
    }
})
export default router