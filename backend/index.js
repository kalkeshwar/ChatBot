const express= require("express")
const cors=require("cors")
const router = require("./routes")
const app = express()
const dotenv= require("dotenv")
dotenv.config();

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3001,()=>{console.log("server is running at port 3001")})

// https://localhost:3001/send-message