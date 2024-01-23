const express= require("express")
const cors=require("cors")
const router = require("./routes")
const app = express()
require("dotenv").config()
const PORT= process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT,()=>{console.log("server is running at port 3001")})

