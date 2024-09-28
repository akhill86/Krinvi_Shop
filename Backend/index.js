const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('dotenv').config();

const db = require('./Config/mongoose-connection')

const usersRouter = require('./Routes/usersRouter')

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,PATCH,HEAD",
    credential:true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("hi")
})

app.use('/user',usersRouter)

app.listen(5000,()=>{
    console.log("Running");
})