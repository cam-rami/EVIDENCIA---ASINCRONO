//IMPORTAR LA FUNCION MOSTRARENHTML
import { mostrarEnHTML } from "./mostrarEnHTML.JS";

//funcion de obtener Datos 
//utilizar async - await
const obtenerEmpleado = async() =>{

    const url = "empleados.json"
    const response = await fetch(url);
    const empleados = await response.json();
    //INVOCAR LA FUNCION HTML
    mostrarEnHTML(empleados);
    //console.log(empleados)
} 

const btnCargarJSON = 
    document.querySelector(`#cargarJSON`);
//añadir eentos click al boton
btnCargarJSON.addEventListener(`click`, 
                                obtenerEmpleado)