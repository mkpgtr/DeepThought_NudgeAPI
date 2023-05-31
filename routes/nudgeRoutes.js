const router = require('express').Router()
const authMiddleware = require('../middlewares/authMiddleware.js')
const Nudge = require('../models/nudgeModel.js')



//get all nudges

router.get('/',async(req,res)=>{
 
    try {
        const nudges = await Nudge.find({})
        res.status(200).json({data:nudges,success:false})

    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})

//get single nudge

router.get('/:id',async(req,res)=>{

    try {
        const {id} = req.params.id
        const nudge = await Nudge.findOne({_id:id})
        if(!nudge){
            return res.status(404).json({message:"no such nudge exists",success:false})
        }

        res.status(200).res.json({data:nudge,success:true})

    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})

// create a nudge

router.post('/',authMiddleware,async(req,res)=>{


    try {
        await Nudge.create(req.body)
        res.status(500).json({message:"Nudge Created Successfully",success:true})
        
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})


//update a nudge 

router.put('/:id',authMiddleware,async(req,res)=>{
    try {
        await Nudge.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({message:"Nudge Updated Successfully",success:false})
        
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }

})

// delete a nudge 

router.delete('/:id',authMiddleware,async(req,res)=>{


    try {
        await Nudge.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Nudge Deleted Successfully",success:false})
        
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})



module.exports = router