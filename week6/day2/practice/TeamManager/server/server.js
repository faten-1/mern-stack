const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(),express.json(), express.urlencoded({ extended:true}))

require('dotenv').config()

require('./config/config')

require('./routes/player.route')(app)

const port = process.env.port 

app.listen(port, () => {
    console.log('listening on port', port )
})

