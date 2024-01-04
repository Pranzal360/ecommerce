const mongoose = require('mongoose')

const {Schema} = mongoose

const CartSchema  = new Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        title:{
            type:String,
            required:true
        },
        description: {
            type:String
        },
        price: {
            type:Number
        },
        imageURL: {
            type:String
        },
        category: {
            type:String
        }

    }
)
module.exports = mongoose.model('carts',CartSchema)