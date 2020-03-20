const express = require('express');
const router = express.Router()
const User  = require('../models/userModel')


router.get('/',async(req,res)=>{
    //res.json('Hello World')
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/:id',getUser,(req,res)=>{
    res.json(res.user)
})

router.post('/',async(req,res)=>{
    const user = new User({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})

router.put('/:id',getUser,async(req,res)=>{
    if(req.body.name != null){
        res.user.name = req.body.name
    }

    if (req.body.city != null){
        res.user.city = req.body.city
    }

    if(req.body.age != null){
        res.user.age = req.body.age
    }

    try{
        const updateUser = await res.user.save()
        res.json(updateUser)
    }catch (err){
        res.status(400).json({message:err.message})
    }
})


router.delete('/:id',getUser,async(req,res)=>{
    try{
        await res.user.remove()
        res.json({message: 'Deleted this User'})
    } catch (err){
        res.status(500).json({message:err.message})
    }
})

async function getUser(req,res,next){
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: 'Cant find user'})
        }
     } catch (err){
         return res.status(500).json({message:err.message})
     }

     res.user = user
     next()
}

module.exports = router