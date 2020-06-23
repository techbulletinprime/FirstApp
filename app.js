const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname,'./views')))
//pp.set('views')
app.get('/abc',(req,res)=>{

    return res.send("Hi")
})
const validator=require('validator')
const email='rajanikamta@gmail.com'
debugger
console.log(validator.isEmail(email))
app.listen(3000)