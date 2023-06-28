import express, { Request, Response } from 'express'
import itemModel from '../models/ShopModel'
const cart: any = []
export const viewItems = async (req: Request, res: Response) => {
    try {

        const viewItem = (await itemModel.find()).reverse()
        res.status(200).json({
            message: 'Showing all Items',
            data: viewItem
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}


export const findByName = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const {name} = req.body
        let item = await itemModel.find(
            {name: id}
        )
        if(item!.length === 0){
            throw Error
        }else{
            return res.status(201).json({
                message: 'Found the item',
                data: item
            })
        }
        
    } catch (error) {
        const { id } = req.params
        res.status(404).json({
            message: `${id} does not exist on the Database`,
            error: error
        })
    }
}
export const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const item = await itemModel.findByIdAndDelete(id)
        
        res.status(201).json({
            message: `Deleted ${item!.name} succesfully`,
            data: item
        })
    } catch (error) {
        res.status(404).json({
            message: 'Error Deleting Item',
            error: error
        })
    }
}
export const buyItems = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const item = await itemModel.findById(id)
        const dataset = {
            name: item!.name,
            price: item!.price,
            
        }
        cart.push(dataset)
        const newItem = await itemModel.findByIdAndUpdate(
            id,
            { qty: item!.qty - 1 },
            { new: true }
        )
        res.status(201).json({
            message: 'Bought succesfully',
            data: newItem,
            cart,
            total: cart.map(el=>{
                return el.price
            }).reduce((a, b) =>{
                return a + b
            })
        })
    } catch (error) {
        res.status(404).json({
            message: 'Error Buying',
            error: error
        })
    }
}
export const addItem = async (req: Request, res: Response) => {
    try {
        const { name, price, qty } = req.body
        const newItem = await itemModel.create({
            name,
            price,
            qty
        })
        res.status(201).json({
            message: 'Added succesfully',
            data: newItem
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}