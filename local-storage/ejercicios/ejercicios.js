'use strict'
// ejercicio 1 :  Crea una aplicación donde el usuario pueda añadir tareas a una lista, marcarlas como completadas y eliminarlas. Todas las tareas deben guardarse en localStorage, de modo que al recargar la página, la lista se mantenga igual. Debe poder visualizarse cuántas tareas hay en total y cuántas están completadas.
// const input = document.querySelector("input");
// const boton = document.querySelector("button");
// const listaTareas = document.querySelector("ul.tareas");

// let arrayTareas = [];
// function crearTarea(tarea) {
//     if (input.value.trim() != "") {
//         let lista = document.createElement("li");
//         const nombreTarea = tarea;
//         lista.textContent = nombreTarea;
//         botonCompletas(lista);
//         botonEliminar(listaTareas,lista);
//         listaTareas.appendChild(lista);
//     }else{
//         alert("Ingresa una tarea valida hincha de velez");
//     }
// }

// function botonEliminar(lista,tarea) {
//     let botonEliminar = document.createElement("button");
//     botonEliminar.textContent = "ELIMINAR";
//     botonEliminar.addEventListener("click",() => {
//         lista.removeChild(tarea);
//     });
//     tarea.appendChild(botonEliminar);
// }

// function botonCompletas(tarea) {
//     let botonCompletas = document.createElement("button");
//     botonCompletas.textContent = "COMPLETA";
//     botonCompletas.addEventListener("click",() => {
//         tarea.classList.toggle("importante");
//     });
//     tarea.appendChild(botonCompletas);
// }

// function guardarTarea() {
//     let tarea = input.value
//     arrayTareas.push(tarea);
//     localStorage.setItem("tareas",JSON.stringify(arrayTareas));
//     let tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
//     for (const tarea of tareasGuardadas) {
//         crearTarea(tarea);
//     }
// }
// boton.addEventListener("click",guardarTarea);

// ejercicio 2 : El usuario podrá escribir notas en un cuadro de texto, asignarles un título, y guardarlas. Las notas deben mostrarse en pantalla y almacenarse en localStorage. Debe haber un botón para eliminar cada nota y otro para borrar todas. También debe mostrarse cuántas notas hay guardadas actualmente. (Se puede acceder al “length” del LocalStorage

// const inputNota = document.querySelector("#nota");
// const guardarNota = document.querySelector("#guardar");
// const eliminarTodo = document.querySelector("#borrarNotas");
// const contenedorNotas = document.querySelector("#contenedor");

// function agregarTarea() {
//     contenedorNotas.innerHTML = "";
//     for (const nota of notas) {
//         let div = document.createElement("div");
//         div.innerHTML = `<p>${nota}</p>`;
//         botonEliminar(nota,div,notas,contenedorNotas,"notas");
//         contenedorNotas.appendChild(div);
//     }
// }
function botonEliminar(tarea,contenedor,arrayTareas,contenedorMadre,almacenInterno) {
    let boton = document.createElement("button");
    boton.textContent = "ELIMINAR";
    boton.addEventListener("click",() => {
        // CADA VEZ QUE FILTRAMOS DEBEMOS ACTUALIZAR EL ESPACIO INTERNO. SE ACTUALIZA HACIENDO UN localStorage.setItem()
        let indice = arrayTareas.indexOf(tarea);
        if (indice !== -1) {
            arrayTareas.splice(indice,1);
            localStorage.setItem(almacenInterno,JSON.stringify(arrayTareas));
            contenedorMadre.removeChild(contenedor);
        }
    });
    contenedor.appendChild(boton);
}

// let notas = JSON.parse(localStorage.getItem("notas")) || [];

// if (notas.length > 0) {
//     agregarTarea();
// }

// guardarNota.addEventListener("click", () => {
//     notas.push(inputNota.value);
//     localStorage.setItem("notas",JSON.stringify(notas));
//     agregarTarea()
// });


// eliminarTodo.addEventListener("click",() => {
//     // BASICAMENTE TENGO QUE BORRAR TAMBIEN EL ESPACIO EN EL LOCAL STORAGE PORQUE LO TENGO QUE BORRAR. EL RESULTADO ME DA LO MISMO SI VACIO EL ARRAY NOTAS PERO ES MAS CORRECTO BORRAR TAMBIEN EL LOCAL STORAGE
//     localStorage.clear();
//     notas = [];
//     contenedorNotas.innerHTML = "";
// });

// ejercicio 3 : Diseña una interfaz donde el usuario pueda guardar enlaces a páginas web con su título. Cada enlace debe mostrarse como un enlace clicable. Los datos deben persistir en localStorage. El usuario podrá eliminar cualquier enlace guardado individualmente.
// const titulo = document.querySelector("#titulo");
// const enlace = document.querySelector("#enlace");
// const contenedorEnlaces = document.querySelector("#contenedor");

// let arrayPaginasWeb = JSON.parse(localStorage.getItem("paginasWeb")) || [];
// document.querySelector("#guardar").addEventListener("click",() => {
//     let paginaWeb = {
//         titulo : titulo.value.trim(),
//         enlace : enlace.value.trim()
//     };
//     arrayPaginasWeb.push(paginaWeb);
//     localStorage.setItem("paginasWeb",JSON.stringify(arrayPaginasWeb));

//     contenedorEnlaces.innerHTML = "";
//     for (const pagina of arrayPaginasWeb) {
//         let contenedor = document.createElement("div");
//         contenedor.innerHTML = `<h2>${pagina.titulo}</h2> <a href="${pagina.enlace}">Enlace</a>`;
//         botonEliminar(pagina,contenedor,arrayPaginasWeb,contenedorEnlaces,"paginasWeb");
//         contenedorEnlaces.appendChild(contenedor);
//     }
// });

// ejercicio 4 : Permite al usuario añadir productos a una lista de compras, indicando nombre y cantidad. Cada vez que se añade un nuevo producto, debe guardarse en localStorage. La lista debe poder ordenarse alfabéticamente y permitir eliminar productos. Los datos deben restaurarse al recargar la página.

// const nombreProducto = document.querySelector("#producto");
// const cantidadProduto = document.querySelector("#cantidad");
// const guardarProducto = document.querySelector("#guardarProducto");
// const contenedorProductos = document.querySelector("#contenedor");

// let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];

// function mostrarProducto() {
//     contenedorProductos.innerHTML = "";
//     for (const producto of arrayProductos) {
//         let contenedorProducto = document.createElement("div");
//         contenedorProducto.innerHTML = `<h2>${producto.nombre}</h2> <p>Cantidad : ${producto.cantidad}</p>`;
//         botonEliminar(producto,contenedorProducto,arrayProductos,contenedorProductos,"productos");
//         contenedorProductos.appendChild(contenedorProducto);
//     }
// }

// if (arrayProductos.length > 0) {
//     mostrarProducto()
// }

// guardarProducto.addEventListener("click",() => {
//     let producto = {
//         nombre : nombreProducto.value.trim(),
//         cantidad : cantidadProduto.value.trim()
//     }
//     arrayProductos.push(producto);
//     localStorage.setItem("productos",JSON.stringify(arrayProductos));
//     mostrarProducto();
// });

// ejercicio 5 : Crea una aplicación que permita cambiar el color de fondo de la página entre varios disponibles. La elección del color debe guardarse en localStorage y aplicarse automáticamente al volver a cargar la página. El color actual debe estar marcado visualmente como seleccionado.

// const body = document.querySelector("body");
// const selectFondo = document.querySelector("select#colorFondo");

// let colorSeleccionado = localStorage.getItem("color");
// body.style.backgroundColor = colorSeleccionado;
// selectFondo.value = colorSeleccionado;

// selectFondo.addEventListener("change",(e) =>{
//     e.preventDefault();
//     let colorSeleccionado = e.target.value;
//     localStorage.setItem("color",colorSeleccionado);
//     body.style.backgroundColor = colorSeleccionado;
// });

// ejercicio 6 : Diseña un panel donde el usuario pueda marcar qué hábitos ha cumplido en el día (por ejemplo: beber agua, caminar, leer). Al marcar un hábito, se guarda la información en localStorage. Al día siguiente, debe poder consultar qué hábitos se marcaron el día anterior. Permite reiniciar el seguimiento con un botón.

// const inputsCheckbox = document.querySelectorAll("input");
// const contenedorHabitos = document.querySelector("div");


// document.querySelector("button").addEventListener("click",() => {
//     contenedorHabitos.innerHTML = "";
//     let habitos = Array.from(inputsCheckbox);
    
//     let habitosCompletados = [];
    
//     for (const habito of habitos) {
//         if (habito.checked) {
//             habitosCompletados.push(habito.name);
//             console.log(habito);
//         }
//     }
//     localStorage.setItem("habitosCompletados",JSON.stringify(habitosCompletados));

//     habitosCompletados = JSON.parse(localStorage.getItem("habitosCompletados")) || [];

//     for (const habito of habitosCompletados) {
//         let contenedor = document.createElement("div");
//         contenedor.innerHTML = `<h2>Habito completado : </h2> <h4>${habito}</h4>`;
//         contenedorHabitos.appendChild(contenedor);
//     }
// });

// ejercicio 7 : Crea una aplicación que permita al usuario seleccionar un idioma, tamaño de texto y modo claro/oscuro. Las preferencias deben almacenarse en localStorage y aplicarse automáticamente al volver a visitar la página. Debe mostrarse al usuario qué preferencias tiene activas.
// const idioma = document.querySelector("#idiomas");
// const texto = document.querySelector("#textoTamaño");
// const modo = document.querySelector("#modo");

// idioma.value = localStorage.getItem("idioma") || "español";
// texto.value = localStorage.getItem("texto") || "normal";
// modo.value = localStorage.getItem("modo") || "claro";

// idioma.addEventListener("change",e => {
//     let valorSeleccionado = e.target.value;
//     localStorage.setItem("idioma",valorSeleccionado);
// });

// texto.addEventListener("change",e => {
//     let valorSeleccionado = e.target.value;
//     localStorage.setItem("texto",valorSeleccionado);
// });

// modo.addEventListener("change",e => {
//     let valorSeleccionado = e.target.value;
//     localStorage.setItem("modo",valorSeleccionado);
// });

// ejercicio 8 : Crea un sistema donde el usuario pueda introducir su nombre y una puntuación. Cada entrada se guardará en localStorage y se mostrará en una tabla de ranking ordenada de mayor a menor puntuación. El usuario podrá eliminar una entrada específica o reiniciar todo el ranking.
// function agregarEstudiante() {
//     contenedorRanking.innerHTML = "";
//     estudiantesNotas.sort(function (a, b) {
//         return a.nota - b.nota;
//     });
//     for (const datos of estudiantesNotas) {
//         let contendor = document.createElement("div");
//         contendor.innerHTML = `<h3>Estudiante : ${datos.nombre}</h3> <p>Nota : ${datos.nota}</p>`;
//         botonBorrar(contendor,estudiantesNotas);
//         contenedorRanking.appendChild(contendor);
//     }        
// }
// function botonBorrar(contenedor,arrayContenedores) {
//     let botonEliminar = document.createElement("button");
//     botonEliminar.textContent = "ELIMINAR";
//     botonEliminar.addEventListener("click",() => {
//         contenedorRanking.removeChild(contenedor);
//         let indice = arrayContenedores.indexOf(contenedor);
//         if (indice) {
//             arrayContenedores.splice(indice,1);
//             localStorage.setItem("usuarios",JSON.stringify(arrayContenedores));
//         }
//     });
//     contenedor.appendChild(botonEliminar);
// }
// const nombre = document.querySelector("input#nombre");
// const nota = document.querySelector("input#nota");
// const botonIntroducir = document.querySelector("#introducirNota");
// const contenedorRanking = document.querySelector(".ranking");
// const borrarLista = document.querySelector("button#borrarLista");

// let estudiantesNotas = JSON.parse(localStorage.getItem("usuarios")) || [];

// if (estudiantesNotas.length > 0) {
//     agregarEstudiante();
// }

// botonIntroducir.addEventListener("click",() => {
//     let estudiante = {
//         nombre : nombre.value,
//         nota : nota.value
//     };
//     estudiantesNotas.push(estudiante);
//     localStorage.setItem("usuarios",JSON.stringify(estudiantesNotas));
//     agregarEstudiante();
// });
// borrarLista.addEventListener("click", () => {
//     estudiantesNotas = [];
//     contenedorRanking.innerHTML = "";
//     localStorage.clear();
// });

// ejercicio 9 : Diseña una galería de elementos (pueden ser productos, personajes, libros, etc.). El usuario puede marcar elementos como favoritos. Los favoritos deben guardarse en localStorage y mostrarse en una sección aparte, persistente al recargar. Cada favorito puede eliminarse individualmente.
const contenedorFavoritos = document.querySelector("div#favoritos");
const botonesFavoritos = Array.from(document.querySelectorAll("button.favorito"));

let librosFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
agregarFavorito();

for (const boton of botonesFavoritos) {
    boton.addEventListener("click", () => {
        const libro = {
            titulo: boton.parentElement.querySelector("h2").textContent,
            portada: boton.parentElement.querySelector("img").src
        };
    
        const indice = librosFavoritos.findIndex(item => item.titulo === libro.titulo);
        if (indice === -1) {
            librosFavoritos.push(libro);
            localStorage.setItem("favoritos", JSON.stringify(librosFavoritos));
            agregarFavorito();
        } else {
            alert(`"${libro.titulo}" ya está en favoritos.`);
        }
    });
    
}

function agregarFavorito() {
    contenedorFavoritos.innerHTML = "<h2>Libros favoritos</h2>";

    for (const libro of librosFavoritos) {
        const contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <h3>${libro.titulo}</h3>
            <img src="${libro.portada}" width="100">
        `;
        eliminarDeFavorito(libro, contenedor);
        contenedorFavoritos.appendChild(contenedor);
    }
}

function eliminarDeFavorito(libro, contenedor) {
    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.addEventListener("click", () => {
        librosFavoritos = librosFavoritos.filter(item => item.titulo !== libro.titulo);
        localStorage.setItem("favoritos", JSON.stringify(librosFavoritos));
        contenedorFavoritos.removeChild(contenedor);
    });
    contenedor.appendChild(boton);
}
