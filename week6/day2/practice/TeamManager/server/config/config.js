const mongoose = require('mongoose')

const DBName = process.env.DBNAME

mongoose.connect(`mongodb://127.0.0.1:27017/${DBName}`)
.then(()=> {console.log('establish conenction to the database ')})
.catch ( (err)=> {console.log('The is a problem in connecting to the database',err)})