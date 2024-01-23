const { OpenAI}= require("openai")
require("dotenv").config()

const apiKey = process.env.OPENAI_API_KEY 

const openai= new OpenAI({key:apiKey})

const handleMessage = async(req,res)=>{
    const content = req.body.content;
    try {
        const stream = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            stream:true,
            messages:[{"role":"user","content":`${content}`}]
    })
     
    for await (const part of stream) {
        const chunk = part.choices[0].delta.content || "";
        res.write(chunk)
    }
    res.end()
    } catch (err) {
        console.log(err);
        res.write(err.message)
    }
}

module.exports = {handleMessage}