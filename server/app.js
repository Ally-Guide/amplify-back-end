require('dotenv').config()
const express = require('express')
//const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
const { auth } = require('express-openid-connect')

app.use(
    auth({
        authRequired: false,
    })
)

//Middleware
//app.use(bodyParser.json());
app.use(cors())

const amplify = require('./routes/api/amplify')
// const give = require('./routes/api/give');

// const email = require('./routes/api/email')

app.use('/api/amplify', amplify)
// app.use('/api/give', give);
// app.use('/api/library', library);
// app.use('/api/email', email);

module.exports = app
