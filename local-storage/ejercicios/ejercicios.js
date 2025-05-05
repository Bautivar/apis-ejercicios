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

// const titulo = document.querySelector("#titulo");
const inputNota = document.querySelector("#nota");
const guardarNota = document.querySelector("#guardar");
const eliminarTodo = document.querySelector("#borrarNotas");
const contenedorNotas = document.querySelector("#contenedor");

// let arrayNotas = [];

let notas = JSON.parse(localStorage.getItem("notas")) || [];

// if (Storage.length > 0) {
//     for (const nota of notas) {
//         let p = document.createElement("p");
//         p.textContent = nota;
//         contenedorNotas.appendChild(p);
//     }
// }

guardarNota.addEventListener("click", () => {
    notas.push(inputNota.value);
    localStorage.setItem("notas",JSON.stringify(notas));

    contenedorNotas.innerHTML = "";
    for (const nota of notas) {
        let p = document.createElement("p");
        p.textContent = nota;
        contenedorNotas.appendChild(p);
    }
});
eliminarTodo.addEventListener("click",() => {
    // BASICAMENTE TENGO QUE BORRAR TAMBIEN EL ESPACIO EN EL LOCAL STORAGE PORQUE LO TENGO QUE BORRAR. EL RESULTADO ME DA LO MISMO SI VACIO EL ARRAY NOTAS PERO ES MAS CORRECTO BORRAR TAMBIEN EL LOCAL STORAGE
    // localStorage.clear();
    notas = [];
});
