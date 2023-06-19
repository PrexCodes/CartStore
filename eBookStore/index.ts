import express, { Application, Router } from 'express'

const port: number = 3500

//Instantiated my server frm express
const app: Application = express();

//Configuring the routes for the project
app.use('/api', Router)

app.listen(port, ()=>{
    console.log('Running on port', port)
})


