const authMiddleware = require('../middlewares/authMiddleware.js')
const User = require('../models/userModel.js')

const router = require('express').Router()

// create an user

router.post('/',authMiddleware,async(req,res)=>{

    try {
        await User.create(req.body)
        res.status(200).json({message:"User created Successfully",success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
        
    }
})

// get all users

router.get('/',authMiddleware,async(req,res)=>{

    try {
        const users = await User.find({})
        res.status(200).json({data:users,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
        
    }
})

//update user
router.put('/:id',authMiddleware,async(req,res)=>{

})

// delete user 

router.delete('/:id',authMiddleware,async(req,res)=>{

})

module.exports = router
