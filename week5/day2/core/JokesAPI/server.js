const express = require('express');
const app = express();

app.use(express.json(),express.urlencoded({extended: true}));

require('./config/mongoose.config')

require('./routes/jokes.routes')(app) 

const port = 5000 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})