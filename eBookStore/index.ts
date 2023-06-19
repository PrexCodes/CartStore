import express, { Application } from 'express'

const port: number = 3500
const app: Application = express();

app.listen(port, ()=>{
    console.log('Running on port', port)
})
