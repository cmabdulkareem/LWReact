import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'

configDotenv()
const corsPolicy = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, HEAD, DELETE, PATCH",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization"
}

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors(corsPolicy))

app.post('/register', (req, res)=>{
    const {username, email, password} = req.body
    console.log(username)
    res.status(200).json("posted succesfully")
})

app.listen(PORT, ()=>{
    console.log(`connected to http://localhost:${PORT}`)
})



