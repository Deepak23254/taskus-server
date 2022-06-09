const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone:{
      required: true,
      type: Number
    },
    age:{
      required: true,
      type: Number
    }

})

module.exports = mongoose.model('users', dataSchema)