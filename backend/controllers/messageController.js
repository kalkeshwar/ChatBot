const { OpenAI}= require("openai")
require("dotenv").config()

const apiKey = process.env.OPENAI_API_KEY 
console.log(apiKey);

const openai= new OpenAI({key:apiKey})

const handleMessage = async(req,res)=>{
    const content = req.body.content;
    try {
        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo-0301",
            messages:[{"role":"user","content":`${content}`}]
        })
        return res.status(200).json(response.choices[0]);
    } catch (err) {
        console.log(err)
        return res.status(500).json({err})
    }
}

module.exports = {handleMessage}