//Define una promise es js}
const valor =
new Promise( (resolve, rejected) => {
    
    //variable de control sentinela 
    const s = 0
    if (s > 0 ) {
        resolve(s)
    }else{
        rejected(s)
    }
} );
//utilizar la promise
//then: en caso de ejecucion del resolve 
//      que se debe hacer 
//catch: en caso de que se ejecute el reject 
//      que se debe hacer 
valor
    .then(dato => console.log(`dato valido: ${dato}`))
    .catch(dato => console.log(`dato invalido ${dato}`))
    console.log(valor)