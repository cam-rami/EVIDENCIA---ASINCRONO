//api fetch :
//establecer conexiciones a archibos o
// url externas al proyecto:
//(otro sistema )

//fincion para tratar el objeto json (empleado)
const mostrarEmpleado = ({nombre, empresa}) => {
    //selector para el div de "contenido"
    const contenido = document
        .querySelector('#contenido')
        //poner contenido HTML en selectores
        contenido.innerHTML = `
        <h2> Empleado del archivo: </h2>
        <p> ${nombre}</p>
        <p> ${empresa} </p>
        `
        
   // console.log(nombre)
   // console.log(empresa)
}


const obtenerDatos = () =>{

    //definir la ruta al archivo de lectura 
    const archivo = "../../data/empleado.json"

    //conectar al archivo 
    fetch(archivo)
        .then(respuesta => 
              respuesta.json())
        .then(dato => mostrarEmpleado(dato))
        .catch(error => console.log(error))
}



obtenerDatos()
