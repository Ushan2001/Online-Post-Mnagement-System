const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

const postRouter = require("./routes/posts")
const userRouter = require("./routes/Users")

app.use(bodyParser.json())  
app.use(cors())

app.use(postRouter)
app.use("/" ,userRouter) 



const PORT = 8070;
const URL = "mongodb+srv://ushan:ushan2001@cluster2.qnmhupm.mongodb.net/mernCrud?retryWrites=true&w=majority"

mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() =>{
    console.log("DB Connect")
})
.catch((err) =>console.log("DB Connection Error", err))

app.listen(PORT, () =>{
    console.log("App is running on  ",PORT)  
})