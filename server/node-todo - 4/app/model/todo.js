var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    name: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
    }
});