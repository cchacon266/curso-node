
const {crearArchivo,crearArchivo2} = require('./Helpers/multiplicar');

crearArchivo()
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))


    crearArchivo2()
    .then(nombreArchivo2 => console.log(nombreArchivo2, 'creado'))
    .catch(err => console.log(err))



