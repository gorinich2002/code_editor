require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const router=require('./routes/index')
const bodyParser = require("body-parser")
const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())  //https://www.npmjs.com/package/body-parser

app.use((req, res, next) => {
    // console.log(req.originalUrl)
    next()
})

app.use(router)
//Обработка ошибок, последний middleware
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()
