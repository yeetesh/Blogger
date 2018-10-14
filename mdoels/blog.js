const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title:{
        type: String,
        required : true
      },
    body:{
        type: String,
        required: true
      },
    date: { 
        type: Date, 
        default: Date.now 
      },
    author : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('blogs',BlogSchema)