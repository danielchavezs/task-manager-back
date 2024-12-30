const { Schema, model } = require('mongoose')

// Esquema definido con Mongoose para cada tarea individual
const TaskSchema = new Schema ({
    title: String,
    description: String,
    completed: Boolean,
}, {
    timestamps: true
})

// Exportación del modelo creado con el esquema para cada transferableAbortController,
module.exports = model('Task', TaskSchema);