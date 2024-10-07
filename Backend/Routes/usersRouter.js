const express = require('express')
const router = express.Router()
const userModel = require('../Models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register',async(req,res)=>{
    try{
        let {email,password} = req.body;
        let user = await userModel.findOne({email:email})
        if(user) return res.status(401).send("You already have account, please login")
       
         bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
                if(err) return res.send(err.message)
                else{
                      const user = await userModel.create({
                           email,
                           password:hash,
                      })

                      let token = jwt.sign({email,id:user._id},"fufuuf")
                      res.cookie("token",token)
                      res.send("user created successfully")
                }
            })
         })
    }catch(error){
        res.status(500).send("Something went wrong")
        console.log(error.message);
    }
})


router.get('/register',(req,res)=>{
    res.send("register route")
})

router.get('/login',(req,res)=>{
    res.send("login route")
})


router.post('/login',async(req,res)=>{
    let {email,password} = req.body;

    let user = await userModel.findOne({email:email})
    if(!user) return res.send("You not have account, please register first")
    
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            let token = jwt.sign({email,id:user._id},"fufuuf")
            res.cookie("token",token)
        }
        else{
            return res.send("Email or Password Incorrect")
        }
    })
})


router.get('/profile',async(req,res)=>{
    let user = await userModel.findOne({email:req.user.email})
    res.send({user})
})

module.exports = router;
