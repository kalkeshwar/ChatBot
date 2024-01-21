const router= require("express").Router()
const {handleMessage} = require("../controllers/messageController")

router.post("/send-message",handleMessage)

module.exports=router;