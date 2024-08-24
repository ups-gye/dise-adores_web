const storage = require('./storage')

function insertar_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if ( !dato.nombre || !dato.apellido || !dato.curso || !dato.paralelo ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}


module.exports = {
    insertar_usuario
}