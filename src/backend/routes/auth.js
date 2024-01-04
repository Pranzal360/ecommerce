const express = require('express')
const mongoose = require('mongoose')
const User = require('../modals/Users')
const jwt = require('jsonwebtoken')
const router = require('./carts')
const fetchuser = require('../middleWare/index')

const sec = 'helloworld'

// signup a user
router.post('/createuser',async (req,res) => {
    try {
        let userEmail = await User.findOne({email:req.body.email})

        if(userEmail) {
            return res.status(400).json({error:'sorry a user with this email already exists'})
        }

        userEmail = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        data = {
            user:{
                id:userEmail.id
            }
        }

        const authtoken = jwt.sign(data,sec)

        res.json({authtoken})

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Error Occurred')
    }
})

router.post('/login',async (req,res) => {
    try {
        const {email,password } = req.body
        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error:'enter correct creds'})
        }
        userpassword = user.password
        
        if (password != userpassword) {
            return res.status(400).json({error:'enter correct creds'})
        }

        data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,sec)
        res.json({authtoken})

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

// Get user details
router.post('/getuser',fetchuser,async (req,res) => {
    try {
        userid = req.user.id
        const user = await User.findById(userid).select('-password')
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router