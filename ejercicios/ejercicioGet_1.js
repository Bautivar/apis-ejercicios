'use strict'
// PRIMER EJERCICIO : API: https://jsonplaceholder.typicode.com/users Haz una petición GET para obtener todos los usuarios. Muestra en una lista solo los nombres y emails Maneja posibles errores
// async function usuarios() {
//     try {
//         const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
//         const datos = await respuesta.json();
//         const body = document.querySelector("body");
//         const ol = document.createElement("ol");
//         for (const dato of datos) {
//             let li = document.createElement("li");
//             let informacionUsuario = "Nombre : " + dato.name + " Email : " + dato.email;
//             li.insertAdjacentText("beforeend",informacionUsuario);
//             ol.appendChild(li);
//         }
//         body.appendChild(ol);
//     } catch (error) {
//         console.error(`Tu error es `,error);
//     }
// }
// usuarios()

// SEGUNDO EJERCICIO : API: https://jsonplaceholder.typicode.com/posts Pide al usuario un ID (1 al 100) mediante prompt. Obtén el post correspondiente y muestra su título y cuerpo. Si el ID no existe, muestra un mensaje de error
// async function consultarPost() {
//     try {
//         const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const datos = await respuesta.json();
//         let consultarId = parseInt(prompt("Dime un id del 1 al 100"));

       
//         if (consultarId <= 100 && consultarId >= 1) {
//             console.log(`Titulo : ${datos[consultarId].title}`);
//             console.log(`Titulo : ${datos[consultarId].body}`);
//         }else{
//             throw new Error("Id erroneo");
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// consultarPost();

// TERCER EJERCICIO : API: https://dummyjson.com/products Obtén todos los productos Filtra y muestra solo los productos con rating mayor a 4.5. Muestra nombre, precio y rating.
// async function productosfiltrados() {
//     try {
//         const respuesta = await fetch("https://dummyjson.com/products");
//         const datos = await respuesta.json();
//         for (const dato of datos.products) {
//             if (dato.rating >= 4.5) {
//                 console.log(`Titulo : ${dato.title}`);
//                 console.log(`Precio : ${dato.price}`);
//                 console.log(`Rating : ${dato.rating}`);
//             }
//         }
//     } catch (error) {
//         console.error("Hubo un error",error);
//     }
// }
// productosfiltrados();

// CUARTO EJERCICIO API: https://dummyjson.com/products/search?q=phone Crea un campo de búsqueda en HTML Al escribir, haz peticiones para buscar productos Muestra resultados en tiempo real (usa debounce para no saturar)
// const buscador = document.querySelector("input");
// const div = document.querySelector("div");
// const p = document.querySelector("p");

// async function buscarProducto(valorInput) {
//     try {
//         const respuesta = await fetch("https://dummyjson.com/products/search?q=phone");
//         const datos = await respuesta.json();
//         for (const dato of datos.products) {
//             if (valorInput === dato.title) {
//                 p.textContent = `Nombre : ${dato.title} Precio : ${dato.price} Descripcion : ${dato.description}`;
//             }else{
//                 p.textContent = "";
//             }
//         }
//     } catch (error) {
//         console.error("Hubo un error",error);
//     }
// }

// let valorBuscador;
// document.addEventListener("input",e => {
//     valorBuscador = e.target.value;
//     buscarProducto(valorBuscador)
// })

// EJERCICIO 5
// async function datosUsuario() {
//     try {
//         // Datos del usuario con id 1
//         const usuario = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const datosUsuario = await usuario.json();

//         // Datos con el id del usuario 1
//         const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
//         const datosPosts = await posts.json();
        
//         let almacenPosts = "Contenido del usuario con ID 1";
//         for (const post of datosPosts) {
//             if (datosUsuario.id === post.userId) {
//                 almacenPosts += (`\nPublicacion N°: ${post.id}\nTitulo : ${post.title} \nContenido : ${post.body}\n`);
//             }
//         }
//         console.log(almacenPosts);
//     } catch (error) {
//         console.error("Hubo un error",error);
//     }
// }
// datosUsuario()

// EJERCICIO 6
// const ul = document.querySelector("ul");
// async function posts() {
//     try {
//         const api = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await api.json();
//         for (const post of posts) {
//             if (post.title.includes("qui")) {
//                 let lista = document.createElement("li");
//                 lista.insertAdjacentText("afterbegin",post.title);
//                 ul.appendChild(lista);
//             }
//         }

//     } catch (error) {
//         console.error("Hubo un error",error);
//     }
// }
// posts();

// EJERCICIO 7
// const imagen = document.querySelector("img");
// const boton = document.querySelector("button");
// async function perrosAleatorios() {
//     try {
//         const apiPerruna = await fetch("https://dog.ceo/api/breeds/image/random");
//         const respuesta =  await apiPerruna.json();
//         imagen.src = respuesta.message;
//     } catch (error) {
//         console.error("Hubo un error ",error)
//     }
// }
// boton.addEventListener("click", perrosAleatorios);

// EJERCICIO 8
// const h1 = document.querySelector("h1");
// const imagen = document.querySelector("img");

// let numeroAleatorio = Math.floor(Math.random() * 150 + 1);

// async function pokemon(pokemonAleatorio) {
//     try {
//         const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`);
//         const pokemon = await apiPokemon.json();

//         console.log(`Nombre : ${pokemon.name}`);    
//         let habilidades = "Habilidades : ";
//         for (const habilidad of pokemon.abilities) {
//             habilidades += (`${habilidad.ability.name} `);
//         }
//         console.log(habilidades);
//     } catch (error) {
//         console.error("Hubo un error ",error);
//     }
// }
// pokemon(numeroAleatorio);

// EJERCICIO 9
// async function climaMadrid() {
//     try {
//         const api = await fetch("https://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=d60c965d81195ee99b10d4e7d66c210b");
//         const datos = await api.json();
//         console.log(`Clima : ${datos.weather[0].main}`);
//         console.log(`Temperatura : ${datos.main.temp}`);
//     } catch (error) {
//         console.error("HUBO ERROR :",error)
//     }
// }

// const boton = document.querySelector("button");
// const input = document.querySelector("input");

// async function climaUsuario() {
//     try {
//         const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=d60c965d81195ee99b10d4e7d66c210b`);
//         const datos = await api.json();
//         console.log(`Clima : ${datos.weather[0].main}`);
//         console.log(`Temperatura : ${datos.main.temp}`);
//     } catch (error) {
//         console.error("HUBO ERROR :",error)
//     }
// }
// boton.addEventListener("click",climaUsuario);
// EEJERCICIO 10
// const h1 = document.querySelector("h1")
// const h2 = document.querySelector("h2")
// const boton = document.querySelector("button")

// async function generarChiste() {
//     try {
//         const api = await fetch("https://official-joke-api.appspot.com/random_joke");
//         const chiste = await api.json();
//         h1.textContent = chiste.setup;
//         h2.textContent = chiste.punchline;
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
//     }
// }

// boton.addEventListener("click",generarChiste);

// EJERCICIO 11
