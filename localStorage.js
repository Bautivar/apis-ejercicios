// Es una API de almacenamiento que podria ser un disco D.

// Cuando guardamos los elementos se hace con clave-valor
// localStorage.setItem("nombre","Juan");

// Luego se puede acceder a esos elementos con getItem y se guarda en una variable
//let nombre =  localStorage.getItem("nombre")

// Tambien se puede limpiar todo el localstorage
// localStorage.clear()

// EL proceso es simple, el localstorage solo recibe strings entonces pasamos el objeto a string usando el JSON.stringify. 
let usuario = {nombre: "Ana",edad : 25};
localStorage.setItem("suario",JSON.stringify(usuario));
// Luego debemos recuperar el objeto usando el parse, que revierte el string
let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre);