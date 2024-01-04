const mongoose = require('mongoose')

let mongoURI = "mongodb://localhost:27017/ecommerce"


const conn = () => {
    mongoose.connect(mongoURI)
}

module.exports = conn