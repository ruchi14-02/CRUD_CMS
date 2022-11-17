
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const assert = require('assert')
const fileUpload = require('express-fileupload')
const {StatusCodes} = require('http-status-code')
//port
const PORT = process.env.PORT

//ref
const app = express()

//bodyparser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//middleware
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

//route
const authRoute = require('./route/authRoute')
const userRoute = require('./route/userRoute')

//primary paths
app.use(`/api/v1/auth`, authRoute)
app.use(`/api/v1/user`, userRoute)


const start = async() =>
{
try{
app.listen(PORT,() => {
    console.log(`server is running at Port ${PORT}`)
})


}catch(err){
    return resizeBy.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
}
}