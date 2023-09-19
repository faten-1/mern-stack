const mongoose = require('mongoose')

const DBName = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${DBName}`)
.then( ()=> {console.log('established connection to the database')})
.catch( (err) => {console.log(err)})

