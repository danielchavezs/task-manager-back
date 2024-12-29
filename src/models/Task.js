const { Schema, model } = require('mongoose')

const TaskSchema = new Schema ({
    title: String,
    description: String,
    completed: Boolean,
}, {
    timestamps: true
})

module.exports = model('Task', TaskSchema);