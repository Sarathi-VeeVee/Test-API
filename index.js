import express from 'express'

const app =express()

app.get('/',(req,res)=>{
    res.send("Hello Kavin Anna !!!!!!")
})

app.listen(5000,()=>{
    console.log("My App is Running ");
})