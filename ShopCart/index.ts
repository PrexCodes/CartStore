import express, { Request, Response } from 'express'
import mongoose from './config/ShopCartDB';
import router from './router/ShopRoute';
const app = express();

app.use(express.json())
mongoose
app.use('/api', router)

app.get('/', (req: Request, res: Response)=>{
    try {
        res.status(200).json({
            message: 'It is running'
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})
const port:number = 3456
app.listen(port, ()=>{
    console.log('Port is Live on: ', port);
    
})