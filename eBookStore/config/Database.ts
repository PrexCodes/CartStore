import mongoose from "mongoose";

const dburl = 'mongodb://0.0.0.0:27017/Set07Bookstore'

mongoose.connect(dburl)

mongoose.connection.on("open", ()=>{
    console.log("")
    console.log("Database is Connected", )
}).once("error", ()=>{
    console.log('An error occured');
    
})

export default mongoose