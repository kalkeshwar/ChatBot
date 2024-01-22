const { OpenAI}= require("openai")
require("dotenv").config()

const apiKey = process.env.OPENAI_API_KEY 

const openai= new OpenAI({key:apiKey})

const handleMessage = async(req,res)=>{
    const content = req.body.content;
    try {
        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[{"role":"user","content":`${content}`}]
        })
        return res.status(200).json({success:true,data:response.choices[0].message.content});
    } catch (err) {
        return res.status(500).json({success:false,error:err.message})
    }
}

module.exports = {handleMessage}