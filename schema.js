const mongoose=require('mongoose')
const mongoosePaginate=require('mongoose-paginate-v2')

const AllScehma= new mongoose.Schema({

  First_name:{
    type:String,
    required:true

  },

   Last_name:{
    type:String,
    required:true

  },


   Age:{
    type:String,
    required:true

  },



  Course:{
    type:String,
    required:true
  },


  Email:{
    type:String,
    required:true,
    unique:true
  }




})

AllScehma.plugin(mongoosePaginate)
const Student= mongoose.model('items',AllScehma)
module.exports=Student
