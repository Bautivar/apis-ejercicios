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
const ciudad = document.querySelector("input.clima");
const botonClima = document.querySelector("button.clima");
const texto = document.createElement("p");

async function buscarClima() {
    try {
        const api = await fetch(`https://goweather.herokuapp.com/weather/${ciudad.value}`);
        const datos = await api.json();
        texto.textContent = `Ciudad : ${ciudad.value} \n Clima actual : ${datos.temperature}`;
        body.appendChild(texto);
    } catch (error) {
        console.error("HUBO ERROR : ",error);
    }
}
botonClima.addEventListener("click",buscarClima);