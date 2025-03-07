const express = require('express')
var cors=require('cors')
require('./connection')
var empmodel = require("./model/employee")
const app = express()
// app.get('/',(req,res)=>{
// res.send("Hello")
// })
app.use(express.json())
app.use(cors())
app.get('/trial',(req,res)=>{
    res.send("Hello Hellooo")
    })
app.get('/add',async(req,res)=>{
    try{
        await empmodel(req.body).save()
        res.send({message:"data added"});
    }catch(error){console.log(error)}
})
app.delete('/remove/:id',async(req,res)=>{
    try{
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({message:"deleted successfully"});
    }catch(error){console.log(error)}
})
app.put('/update/:id',async(req,res)=>{
    try{
        await empmodel.findByIdAndUpdate(req.params.id,req.body)

        res.send({message:"updated  successfully"});
    }catch(error){console.log(error)}
})

app.get('/view',async(req,res)=>{
    try{
        var a=await empmodel.find();
        res.send(a);
    }catch(error){console.log(error);}
})
app.listen(3004,()=>{
console.log("port is running")

})
