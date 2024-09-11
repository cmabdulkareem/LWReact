import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/LW")
    .then(()=>{console.log("connected to db")})
    .catch((err)=>{err})