//mostrar en DOM los empleados 
/*const mostrarEnHTML = (empleados) =>{
    const tbody=
         document.querySelector('#empleados tbody')
    let fila = ''
    empleados.forEach( empleado => {
                 const{nombre, empresa, trabajo } = empleado
                 fila = fila +`
                     <tr>
                         <td> ${nombre} </td>
                         <td>${empresa}</td>
                         <td>${trabajo}</td>
                     </tr>`      
     })
      //vincular el contenido al selector 
      tbody.innerHTML = fila
 }*/
//funcion de conexion

const obtenerEmpleados = () => {

    const url = '../../data/empleados.json'
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarEnHTML(data))
        .catch(err => console.log(err));
}

//selector al boton
const btnCargarJSON = 
    document.querySelector(`#cargarJSON`);
//añadir eentos click al boton
btnCargarJSON.addEventListener(`click`, 
                                obtenerEmpleados)

