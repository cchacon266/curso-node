const fs = require('fs');


const crearArchivo = (base) => {

    return new Promise ((resolve,reject)=>{

        let salida = ''
        for(base= 5; base <=5; base++){
            for (let i = 1; i <=10; i++){
               salida += `${base} x ${i} = ${base * i}\n`;
                }   
                console.log(salida)
        }  
        fs.writeFileSync('tablas.txt', salida)
        resolve(`tablas del ${base - 1}.txt creado`);

    })
    
        
}

const crearArchivo2 = async(base) => {

    try {
        let salida = ''
        for(base= 2; base <=2; base++){
            for (let i = 1; i <=10; i++){
               salida += `${base} x ${i} = ${base * i}\n`;
                }   
                console.log(salida)
        }  
        fs.writeFileSync('tablas2.txt', salida)
        return`tablas del ${base-1}.txt creado`;
        
    } catch (err) {
        throw err
    }
}

module.exports = {
 crearArchivo,
 crearArchivo2
}