const mongoose = require('mongoose')

const URL= 'mongodb://localhost:27017/angularAuth'

const connection = async()=>{
    try {
        let dbConnect =await mongoose.connect(URL)
        console.log('Connected to db....')
    } catch (error) {
        console.log(`Error in db connection ${error}`)
    }
}

module.exports =connection