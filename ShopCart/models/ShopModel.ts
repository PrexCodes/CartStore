import mongoose from "mongoose"

interface ItemShop{
    name: string
    price: number
    qty: number
}

interface iItem extends ItemShop, mongoose.Document{}

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        
    },
    qty: {
        type: Number,
        
    },
})

const itemModel = mongoose.model<iItem>("items", itemSchema)
export default itemModel