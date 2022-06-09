const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: String
    },
    properties: {
        required: true,
        type: Object
    },
})

module.exports = mongoose.model('Widget_properties', dataSchema)