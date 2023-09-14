const express = require('express')
const bodyParser= require('body-parser')
const PORT=8080
const app= express()
const api =require('./routes/api')
const database= require('./dbConnection/db')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/api',api)
app.get('/',(req,res)=>{
    res.send("Hello from server")
})

app.listen(PORT , async()=>{
    console.log(`Server is running on port ${PORT}`)  
    await database()
})