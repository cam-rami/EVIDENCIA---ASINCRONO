//mostrar en DOM los empleados 
export const mostrarEnHTML = (empleados) =>{
    const tbody =
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
     //console.log(tbody)
    }