const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const req_date = {
    type: Date,
    required: true
}

const usuario_schema = new schema({
    nombre: req_string,
    apellido: req_string,
    curso: req_string,
    paralelo: req_string
})

const model = mongoose.model('Usuario', usuario_schema)
module.exports = model