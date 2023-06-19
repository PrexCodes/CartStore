import express, { Request, Response } from 'express'

import BookModels from '../models/BookStoreModels'

//search for books, 


//Upload books

export const uploadBooks = async (req: Request, res: Response) => {
    try {
        const {
            title, author, category, description, 
        }  = req.body

        const NewBooks = await BookModels.create({
            title, author, views: [], category,
            description, coverImage: title.charAt(0).toUpperCase()
        })

        return res.status(201).json({
            message: 'Book Successfully Uploaded',
            data: NewBooks
        })


    } catch (error) {
        return res.status(400).json({
            message: 'Book Successfully Uploaded',
            data: error
        })
    }
}

//404 not found, 400 bad request
//view one book


// get all books


//update a book