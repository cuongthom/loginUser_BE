const express = require('express')
const dotenv = require('dotenv')
const { connect } = require('./database/database.js')
require('dotenv').config()
dotenv.config()
const app = express()
const configViewEngine = require('./configs/viewEngine.js')
configViewEngine(app)
const checkToken = require("./authentication/auth.js")
const movieRoutes = require('./routes/ChillMovie.js')
const userRoutes = require('./routes/User.js')


app.use(checkToken)
app.use(express.json())


app.use('/v1', userRoutes)
app.use('/v2', movieRoutes)
app.listen(process.env.PORT || 3000, async (req, res) => {
    await connect()
    console.log(`Example app listening on port ${process.env.PORT}`)
})