
import express, { response } from 'express';
import { getconnection } from './conexion.js'
import { Request } from 'tedious';
let router = express.Router()


router.get("/", (req, res) => {
    res.send("hola como estas waa123")
})


router.get('/obtenerPokemones',async (req, res) => {
    try {
        // console.log(obtenerPokemones())
        const pool = await getconnection();
        const result = await pool.request().query('SELECT * FROM pokemones')
        res.send(result.recordset)
    } catch (error) {
        res.send(error.message)
    }
})
export default router