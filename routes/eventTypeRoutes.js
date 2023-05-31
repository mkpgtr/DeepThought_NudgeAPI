const router = require('express').Router()
const authMiddleware = require('../middlewares/authMiddleware.js')
const EventType = require('../models/eventTypeModel.js')


router.post('/',authMiddleware,async(req,res)=>{


    try {
        await EventType.create(req.body)
        res.status(500).json({message:"Event Category Created Successfully",success:true})
    }
        
     catch (error) {
        res.status(500).json({
            message:error.message,
            success:false
        })
    }
})

router.get('/',async(req,res)=>{
    try {
        const eventTypes = await EventType.find({})
        res.status(200).json({data:eventTypes,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const event = await EventType.find({_id:req.params.id})
        res.status(200).json({data:event,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})





module.exports = router