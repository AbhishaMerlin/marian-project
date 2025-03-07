var mongoose= require('mongoose')
mongoose.connect("mongodb+srv://abhishamerlinsm:Abhisha@cluster0.rofi1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log("err")
})