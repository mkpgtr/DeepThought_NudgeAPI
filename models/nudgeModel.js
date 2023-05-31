const mongoose = require('mongoose')
const moment = require('moment')

const nudgeSchema = new mongoose.Schema({
    eventCategoryId :{
        type:mongoose.Types.ObjectId,
        ref:'eventType'
    },
    eventId:{
        type:mongoose.Types.ObjectId,
        ref:'event'

    },
    // this will have the css class of the icon (from fontawesome or remix icons)
    icon:{
        type:String,
        required:true
    },
    invitationLine:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
        
    },
    scheduledOn:{
        type:Date,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


module.exports = mongoose.model('nudge',nudgeSchema)