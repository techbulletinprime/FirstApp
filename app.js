const express=require('express')
const path=require('path')
const app=express()
const port=process.env.PORT || 3000
app.use(express.static(path.join(__dirname,'./views')))

app.get('/home',(req,res)=>{

    return res.send("Home Page")
})
const validator=require('validator')
const email='rajani@gmail.com'
debugger
console.log(validator.isEmail(email))
app.listen(port)