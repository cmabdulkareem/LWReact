import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import './config/db.js'
import UserModel from "./models/userModel.js";
import bcrypt from 'bcryptjs'

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
    if(!username || !email || !password){
        return res.status(400).json({error: "requirement not fullfilled"})
    }
    UserModel.findOne({email})
        .then((user)=>{
            if(user){
               return res.status(400).json({error: "email already exists"})
            }
            const hashedPassword = bcrypt.hash(password, 10)
            UserModel.create({username, email, password})
            .then((user)=>{
                res.status(200).json({message: "registration success"})
            })
            .catch((err)=>{
                res.status(500).json({error: "Internal Server error"})
            })
        .catch((err)=>{
                res.status(500).json({error: "Internal Server error"})
            })
        })
})

app.listen(PORT, ()=>{
    console.log(`connected to http://localhost:${PORT}`)
})



