'use strict'
// ejercicio 1 :  Crea una aplicación donde el usuario pueda añadir tareas a una lista, marcarlas como completadas y eliminarlas. Todas las tareas deben guardarse en localStorage, de modo que al recargar la página, la lista se mantenga igual. Debe poder visualizarse cuántas tareas hay en total y cuántas están completadas.
const input = document.querySelector("input");
const boton = document.querySelector("button");
const listaTareas = document.querySelector("ul.tareas");

let arrayTareas = [];
function crearTarea(tarea) {
    if (input.value.trim() != "") {
        let lista = document.createElement("li");
        const nombreTarea = tarea;
        lista.textContent = nombreTarea;
        botonCompletas(lista);
        botonEliminar(listaTareas,lista);
        listaTareas.appendChild(lista);
    }else{
        alert("Ingresa una tarea valida hincha de velez");
    }
}

function botonEliminar(lista,tarea) {
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "ELIMINAR";
    botonEliminar.addEventListener("click",() => {
        lista.removeChild(tarea);
    });
    tarea.appendChild(botonEliminar);
}

function botonCompletas(tarea) {
    let botonCompletas = document.createElement("button");
    botonCompletas.textContent = "COMPLETAS";
    botonCompletas.addEventListener("click",() => {
        tarea.classList.toggle("importante");
    });
    tarea.appendChild(botonCompletas);
}

function guardarTarea() {
    let tarea = input.value
    arrayTareas.push(tarea);
    localStorage.setItem("tareas",JSON.stringify(arrayTareas));
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    for (const tarea of tareasGuardadas) {
        crearTarea(tarea);
    }
}
boton.addEventListener("click",guardarTarea);
