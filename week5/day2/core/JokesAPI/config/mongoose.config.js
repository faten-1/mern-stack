const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/my_db`)
.then(()=> {console.log('establish conenction to the dabbase ')})
.catch ( (err)=> {console.log('The is a problem in connecting to the database',err)})