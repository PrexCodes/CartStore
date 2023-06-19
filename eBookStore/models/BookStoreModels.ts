import mongoose from "mongoose";

//create interface of scheme

interface Books {
    title: string,
    description: string,
    author: string,
    views: number[],
    coverImage: string,
    category: string,

}

interface iBooks extends Books, mongoose.Document { }

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    views: {
        type: []
    },
    coverImage: {
        type: String
    },
    category: {
        type: String
    },

},
    { timestamps: true }
)

const BookModels = mongoose.model<iBooks>("Books", bookSchema)

export default BookModels
