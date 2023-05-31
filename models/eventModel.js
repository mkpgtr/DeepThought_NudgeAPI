const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    category:{
        type:mongoose.Types.ObjectId,
        ref:'eventType',
        required:true
    },
    name:{
        type:String,
        required:true  
    },
    subcategory:{
        type:mongoose.Types.ObjectId,
        ref:'subCategory',
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
    },
    tagline:{
        type:String,
    },
    scheduled:{
        type:[]
    },
  
  
    description:{
        type:String,
        required:true
    },
    moderator:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    rigor_rank:{
      type:Number,
    required:true
    },
    attendees:{
        type:[],
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },

},{
    timestamps:true
})


module.exports = mongoose.model('event',eventSchema)