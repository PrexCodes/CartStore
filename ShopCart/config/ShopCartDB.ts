import mongoose from "mongoose";

const dbURL = 'mongodb://0.0.0.0:27017/ShopJCart'

mongoose.connect(dbURL)

mongoose.connection.on("open", ()=>{
    console.log('It is connected to the DB');
    
}).once("error", ()=>{
    console.log("Error connecting")
})

export default mongoose