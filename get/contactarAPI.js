'use strict'
// callback es una funcion que se pasa como parametro de otra funcion Con el fectch, el primer then hacemos una funcion con el parametro response que seria el resultado de la consulta a la api

// La API es ocmo un camarero, primer hacemos una peticion al camarero, el camarero pide la comida al cocinero y hace una espera, luego recibe la comida y la entrega
// SENTENCIA TRY-CATCH = try intenta ejecutar un codigo y cathc salta y muestra el error

// const n1 = 2;
// const n2 = 0;

// function dividir(a,b) {
//     try {
//         // Aca si el b = 0 try prepara el mensaje para mandarlo al catch
//         if (b === 0) throw new Error("Division por cero");
//         return a / b
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// console.log(dividir(n1,n2));
// console.log(dividir(2,5));

// Al hacer una peticion a una API, usamos fetch y nos devuelve una promesa y la promesa la convertimos a json
// Aca nos devuelve una promesa porque accedemos con then
// fetch("https://dummyjson.com/users")
// .then((respuesta) => respuesta.json())
// .then((datos) => {
//     console.log("NOMBRE : "+datos.users[0].firstName +", PELO :"+ datos.users[0].hair.color)
//     console.log(datos.users[0].hair.color)
// }
// )

// fetch("https://dummyjson.com/products")
// .then((respuesta) => respuesta.json())
// .then((datos) => {
//     let body = document.querySelector("body");
//     for (const producto of datos.products) {
//         let nuevaImagen = document.createElement("img");

//         let imagenSrc = producto.images;
//         nuevaImagen.src = imagenSrc;

//         body.appendChild(nuevaImagen);
//     }
// })


// El json nos devuelve la promesa de la api pero organizada en un objeto todo ordenado

// fetch devuelve una promesa, los datos que nos devuelve la promesa la convertimos a json y para sacar la informacion de json hacemos un then y pedimos los datos

// Async await podemos almacenar la api en una funcion y la usamos cuando querramos.

// async function imagenesProductos(){
//     try {
//         const respuesta =  await fetch("https://dummyjson.com/products");
//         const datos = await respuesta.json();
//         let body = document.querySelector("body");
//         for (const producto of datos.products) {
//             let nuevaImagen = document.createElement("img");

//             let imagenSrc = producto.images;
//             nuevaImagen.src = imagenSrc;

//             body.appendChild(nuevaImagen);
//         }
//     } catch (error) {
//         // el error contiene el reject que contiene la promesa de la API
//         console.error("Erroe en usuarios ",error);   
//     }
// }
// imagenesProductos();