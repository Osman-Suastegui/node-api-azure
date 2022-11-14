import express from 'express';
import router from './rutas.js'
import cors from "cors";
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)

const PORT = process.env.PORT ||  3000
app.listen(PORT)
