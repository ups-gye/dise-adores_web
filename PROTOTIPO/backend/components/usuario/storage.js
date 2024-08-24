const model = require('./model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

module.exports = {
    insertar:insertar_usuario
}