const express = require('express')
const fetchuser = require('../middleWare/index')
const Carts = require('../modals/Carts')

const router = express.Router()

// fetch all cart item of current user
router.get('/fetchcart',fetchuser,async( req,res) => {
    const carts = await Carts.find({user:req.user.id})
    res.json(carts)
})

// add to cart 
router.post('/addtocart',fetchuser,async (req,res) => {
    const {title,description,imageURL,category,price} = req.body
    const cart = new Carts({
        title,description,imageURL,category,price,user:req.user.id
    })
    const saved = await cart.save()
    res.send(saved)
})

// remove from cart 
router.delete('/delete/:id',fetchuser, async(req,res) => {
    let item = await Carts.findById(req.params.id)
    if (!item ) { return res.status(404).json('item not found')}
    if (item.user.toString()  != req.user.id) {return res.status(401).send('not authorised')} 
    item = await Carts.findByIdAndDelete(req.params.id)
    res.send(item)
})

module.exports = router