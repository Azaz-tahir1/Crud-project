const express=require('express');
const app=express()
const router=require('./routes')
const mongoose=require('mongoose')

// connerion

mongoose.connect('mongodb://127.0.0.1:27017/box')
.then(()=>{console.log('sucessfully connected')}  )
.catch(err=>console.log(err))



//middleware

app.use(express.urlencoded({extended:true}))
app.set('view engine' ,'ejs')
app.use(express.static('public'))





app.use('/', router)



app.listen(3000, ()=>[
console.log('DONE!!!!')
])

