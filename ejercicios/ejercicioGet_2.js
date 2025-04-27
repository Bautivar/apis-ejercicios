'use strict'
// ejercicio 1
const body = document.querySelector("body");
// const buscador = document.querySelector("input");
// const botonBuscar = document.querySelector("button");
// const div = document.querySelector("div");



// async function buscarUsuario() {
//     try {
//         div.innerHTML="";
//         const api = await fetch(`https://api.github.com/users/${buscador.value}`);
//         const respuesta = await api.json();
        
//         let nombreUsuario = document.createElement("p");
//         let fotoPerfil = document.createElement("img");
//         let repositoriosPublicos = document.createElement("p");

//         nombreUsuario.textContent = `Nombre : ${respuesta.login}`;
//         fotoPerfil.src = respuesta.avatar_url;
//         repositoriosPublicos.textContent = `Repositorios publicos : ${respuesta.public_repos}`;

//         div.appendChild(nombreUsuario);
//         div.appendChild(fotoPerfil);
//         div.appendChild(repositoriosPublicos);
//         body.appendChild(div);
//     } catch (error) {
//         console.error("HUBO UN ERROR : ",error);
//     }
// }
// botonBuscar.addEventListener("click",buscarUsuario);

// ejercicio 2
// const boton = document.querySelector("button");
// const listaPosts = document.createElement("ul");
// async function cargarPosts() {
//     listaPosts.innerHTML = "";
//     const api = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const datos = await api.json();
//     for (const dato of datos) {
//         if (dato.id <= 10) {
//             let lista = document.createElement("li");
//             lista.textContent = `Titulo : ${dato.title}`;
//             listaPosts.appendChild(lista);
//         }
//     }
//     body.appendChild(listaPosts);
// }
// boton.addEventListener("click",cargarPosts);

// ejercicio 3
// const botonPerro = document.querySelector("button.perro");
// const imagenPerro = document.querySelector("img.perro");

// async function perroAleatorio(){
//     try {
//         const api = await fetch("https://dog.ceo/api/breeds/image/random");
//         const datos = await api.json();
//         imagenPerro.src = datos.message;
//     } catch (error) {
//         console.error("HUBO ERROR : ",error);
//     }
// }
// botonPerro.addEventListener("click",perroAleatorio);

// ejercicio 4
// const ciudad = document.querySelector("input.clima");
// const botonClima = document.querySelector("button.clima");
// const texto = document.createElement("p");

// async function buscarClima() {
//     try {
//         const api = await fetch(`https://goweather.herokuapp.com/weather/${ciudad.value}`);
//         const datos = await api.json();
//         texto.textContent = `Ciudad : ${ciudad.value} \n Clima actual : ${datos.temperature}`;
//         body.appendChild(texto);
//     } catch (error) {
//         console.error("HUBO ERROR : ",error);
//     }
// }
// botonClima.addEventListener("click",buscarClima);

// ejercicio 5
// const seleccionarPais = document.querySelector("select");
// const imagen = document.querySelector("img");
// const texto = document.createElement("p");

// async function agregarPaises() {
//     try {
//         const api = await fetch("https://restcountries.com/v3.1/all");
//         const paises = await api.json();
    
//         for (const pais of paises) {
//             let opcion = document.createElement("option");
//             opcion.textContent = pais.name.common;
//             seleccionarPais.appendChild(opcion);
//         }

//         seleccionarPais.addEventListener("change",() =>{
//             for (const pais of paises) {
//                 if (pais.name.common === seleccionarPais.value) {
//                     texto.textContent = `Capital : ${pais.capital} \n Poblacion : ${pais.population}`;
//                     imagen.src = pais.flags.png;
//                     body.appendChild(texto);
//                 }
//             }
//         });
        
//     } catch (error) {
//         console.error("HUBO ERROR : ",error)
//     }
// }
// agregarPaises();

// ejercicio 6
// const input = document.querySelector("input");
// const boton = document.querySelector("button");
// const definicion = document.createElement("p");

// async function transaladarIngles() {
//     try {
//         const api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
//         const datos = await api.json();
    
//         definicion.textContent = datos[0].meanings[0].definitions[0].definition;
//         body.appendChild(definicion);
//     } catch (error) {
//         console.error(error);
//     }
// }
// boton.addEventListener("click",transaladarIngles);

// ejercicio 8
// const botonPersonajes = document.querySelector("button");

// async function rickYMorty() {
//     try {
//         const api = await fetch("https://rickandmortyapi.com/api/character");
//         const personajes = await api.json();
    
//         for (let i = 0; i < 10; i++) {
//             let contenedor = document.createElement("div");
//             let nombre = document.createElement("h2");
//             nombre.textContent = "Nombre : " + personajes.results[i].name;
//             contenedor.appendChild(nombre);
    
//             let fotoperfil = document.createElement("img");
//             fotoperfil.src =personajes.results[i].image;
//             contenedor.appendChild(fotoperfil);
    
//             let estado = document.createElement("p");
//             estado.textContent = "Esto actual : " + personajes.results[i].status;
//             contenedor.appendChild(estado);
            
//             body.appendChild(contenedor);
//         }
//     } catch (error) {
//         console.error("HUBO ERROR : ",error);
//     }
// }
// botonPersonajes.addEventListener("click",rickYMorty);

// ejercicio 9
// const botonTareas = document.querySelector("button");
// const listaOrdenada = document.querySelector("ul");

// async function obtenerTareas() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const resultado = await api.json();

//     let arrayTareas = [];
//     for (let i = 0; i < 10; i++) {
//         arrayTareas.push(resultado[i])
//     }

//     for (const tarea of arrayTareas) {
//         let lista = document.createElement("li");
//         if (tarea.completed === true) {
//             lista.innerHTML = "<s>" + tarea.title + "</s>";
//         }else{
//             lista.textContent = tarea.title;
//         }
//         listaOrdenada.appendChild(lista);
//     }
// }
// botonTareas.addEventListener("click",obtenerTareas);

// ejercicio 10
// const inputGithub = document.querySelector("input.github");
// const botonMostrar = document.querySelector("button.github");

// async function mostrarUsuarioGithub() {
//     try {
//         const api = await fetch(`https://api.github.com/users/${inputGithub.value}`);
//         const datos = await api.json();
    
//         let nombreUsuario = document.createElement("h1");
//         let imagenUsuario = document.createElement("img");
//         let repositoriosPublicos = document.createElement("p");
    
//         nombreUsuario.textContent = datos.login;
//         imagenUsuario.src = datos.avatar_url;
//         repositoriosPublicos.textContent = datos.public_repos;
    
//         body.appendChild(nombreUsuario);
//         body.appendChild(imagenUsuario);
//         body.appendChild(repositoriosPublicos);
        
//     } catch (error) {
//         console.error("HUBO ERROR ",error);
        
//     }
// }

// botonMostrar.addEventListener("click",mostrarUsuarioGithub);

// ejercicio 11
// const botonAgregar = document.querySelector("button#agregarImagen");
// const botonVaciar = document.querySelector("button#vaciarGaleria");
// let arrayImagenes = [];
// async function agregarImagenes() {
//     try {
//         console.log("hola");
//         const api = await fetch("https://dog.ceo/api/breeds/image/random");
//         const datos = await api.json();

//         let fotoGaleria = document.createElement("img");
//         fotoGaleria.src = datos.message;

//         arrayImagenes.push(fotoGaleria);

//         for (const imagen of arrayImagenes) {
//             body.appendChild(imagen);
//         }
//     } catch (error) {
//         console.error("HUBO ERROR",error);
//     }
// }
// function borrarGaleria() {
//     arrayImagenes = [];
// }
// botonAgregar.addEventListener("click",agregarImagenes);
// botonVaciar.addEventListener("click",borrarGaleria);

// ejercicio 12
// const botonAmerica = document.querySelector("button.america");
// const botonAfrica = document.querySelector("button.africa");
// const botonEuropa = document.querySelector("button.europa");
// const botonAsia = document.querySelector("button.asia");
// const botonOceania = document.querySelector("button.oceania");

// let contenedorPaies = document.createElement("div");
// body.appendChild(contenedorPaies);

// async function consultarApi() {
//     try {
//         const api = await fetch("https://restcountries.com/v3.1/all");
//         const datos = await api.json();
//         return datos
//     } catch (error) {
//         console.error("HUBO ERROR: ",error);
//     }
// }

// async function paisesAmerica() {
//     try {
//         contenedorPaies.innerHTML = "";
//         const paises = await consultarApi();
//         for (const pais of paises) {
//             if (pais.region === "Americas") {
//                 let nombreCapital = document.createElement("h2");
//                 nombreCapital.textContent = `Nombre : ${pais.name.common}, capital : ${pais.capital}`;

//                 let bandera = document.createElement("img");
//                 bandera.src = pais.flags.png;

//                 contenedorPaies.appendChild(nombreCapital);
//                 contenedorPaies.appendChild(bandera);
//             }
//         }
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
            
//     }
// }
// async function paisesAfrica() {
//     try {
//         contenedorPaies.innerHTML = "";
//         const paises = await consultarApi();
//         for (const pais of paises) {
//             if (pais.region === "Africa") {
//                 let nombreCapital = document.createElement("h2");
//                 nombreCapital.textContent = `Nombre : ${pais.name.common}, capital : ${pais.capital}`;

//                 let bandera = document.createElement("img");
//                 bandera.src = pais.flags.png;

//                 contenedorPaies.appendChild(nombreCapital);
//                 contenedorPaies.appendChild(bandera);
//             }
//         }
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
            
//     }
// }
// async function paisesEuropa() {
//     try {
//         contenedorPaies.innerHTML = "";
//         const paises = await consultarApi();
//         for (const pais of paises) {
//             if (pais.region === "Europe") {
//                 let nombreCapital = document.createElement("h2");
//                 nombreCapital.textContent = `Nombre : ${pais.name.common}, capital : ${pais.capital}`;

//                 let bandera = document.createElement("img");
//                 bandera.src = pais.flags.png;

//                 contenedorPaies.appendChild(nombreCapital);
//                 contenedorPaies.appendChild(bandera);
//             }
//         }
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
            
//     }
// }
// async function paisesAsia() {
//     try {
//         contenedorPaies.innerHTML = "";
//         const paises = await consultarApi();
//         for (const pais of paises) {
//             if (pais.region === "Asia") {
//                 let nombreCapital = document.createElement("h2");
//                 nombreCapital.textContent = `Nombre : ${pais.name.common}, capital : ${pais.capital}`;

//                 let bandera = document.createElement("img");
//                 bandera.src = pais.flags.png;

//                 contenedorPaies.appendChild(nombreCapital);
//                 contenedorPaies.appendChild(bandera);
//             }
//         }
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
            
//     }
// }
// async function paisesOceania() {
//     try {
//         contenedorPaies.innerHTML = "";
//         const paises = await consultarApi();
//         for (const pais of paises) {
//             if (pais.region === "Oceania") {
//                 let nombreCapital = document.createElement("h2");
//                 nombreCapital.textContent = `Nombre : ${pais.name.common}, capital : ${pais.capital}`;

//                 let bandera = document.createElement("img");
//                 bandera.src = pais.flags.png;

//                 contenedorPaies.appendChild(nombreCapital);
//                 contenedorPaies.appendChild(bandera);
//             }
//         }
//     } catch (error) {
//         console.error("HUBO ERROR :",error);
            
//     }
// }
// botonAfrica.addEventListener("click",paisesAfrica);
// botonAmerica.addEventListener("click",paisesAmerica);
// botonAsia.addEventListener("click",paisesAsia);
// botonOceania.addEventListener("click",paisesOceania);
// botonEuropa.addEventListener("click",paisesEuropa)

// ejercicio 13
// HACER MAS TARDE
// const buscadorEspecie = document.querySelector("input.especie");
// const botonEspecie = document.querySelector("button.especie");
// let arrayPersonajes = [];

// async function especieRickMorty() {
//     const api = await fetch("https://rickandmortyapi.com/api/character");
//     const datos = await api.json();

//     for (const personaje of datos.results) {
//         if (personaje.species === buscadorEspecie.value) {
//             let contenedorPersonaje = document.createElement("div");

//             let imagenPersonaje = document.createElement("img");
//             imagenPersonaje.src = personaje.image;
//             contenedorPersonaje.appendChild(imagenPersonaje);

//             let nombrePersonaje = document.createElement("h2");
//             nombrePersonaje.textContent = personaje.name;
//             contenedorPersonaje.appendChild(nombrePersonaje);

//             let estadoActual = document.createElement("h3");
//             estadoActual.textContent = personaje.status;
//             contenedorPersonaje.appendChild(estadoActual);

//             arrayPersonajes.push(contenedorPersonaje);
//         }
//     }
//     body.appendChild(arrayPersonajes[0]);
// }
// botonEspecie.addEventListener("click",especieRickMorty);

// ejercicio 14
// const buscadorPokemon = document.querySelector("input.pokemon");
// const botonPokemon = document.querySelector("button.pokemon");
// const contenedorPokemones = document.querySelector("div.contenedorPokemones");

// let arrayPokemon = [];
// // FILTRAR INFORMACION aca puedo almacenar
// async function almacenarPokemon() {
//     try {
//         const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscadorPokemon.value}`);
//         const datos = await api.json();

//         let filtrarPokemon = arrayPokemon.filter((pokemon) =>  pokemon.name === datos.name)
//         if (filtrarPokemon.length >= 1) {
//             alert("ESE POKEMON YA FUE CONSULTADO");
//         }else{
//             arrayPokemon.push(datos);
//             informacionPokemon();
//         }
//     } catch (error) {
//         console.error("HUBO ERROR : ",error);
//         if (buscadorPokemon.value.trim() === "") {
//             alert("DEBES INTRODUCIR UN POKEMON");
//         }
//     }
// }
// // ASIGNAR DATOS
// function informacionPokemon() {
//     contenedorPokemones.innerHTML = "";
//     for (const pokemon of arrayPokemon) {
//         let contenedorPokemon = document.createElement("div");
//         contenedorPokemon.innerHTML = `<img src=${pokemon.sprites.front_default}> <h2>Nombre : ${pokemon.name}</h2>
//         <h3>Tipos : ${pokemon.types.length}</h3>`;
//         contenedorPokemon.addEventListener("click",() => {
//             const indicePokemon = arrayPokemon.indexOf(pokemon);
//             arrayPokemon.splice(indicePokemon,1);
//             contenedorPokemon.style.display = "none";
//         })

//         contenedorPokemones.appendChild(contenedorPokemon);
//     }
// }
// botonPokemon.addEventListener("click",almacenarPokemon)

// ejercicio 15
