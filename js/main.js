/*document.addEventListener("DOMContentLoaded", e =>{
    console.log("DOM is ready");
    guardarInformacion();

})

function guardarInformacion( ){
    localStorage.clear(); */
    
    /*let localStorage = window.localStorage;
    console.log(localStorage);
    */
    /*
    localStorage.setItem("user", {name:"Ulani Triviño", age:1, mascotas:"Pellito"});
    localStorage.setItem("carritoCompras", ["notebook","bolso"]);
    */
/*
   const user= {name:"Ulani Triviño", age:1, mascotas: ["Pellito"]};
   localStorage.setItem("user", JSON.stringify(user));

   consultarInformacon();

}


function consultarInformacon(){

    let usuario = JSON.parse(localStorage.getItem("user"));

    
    console.log(usuario);
}
*/
let c = 25;
let input = document.getElementsByClassName("card__input")[0];
const baseURL="https://pokeapi.co/api/v2/";
let pokeid = document.getElementsByClassName("card__id")[0];

function fetchData(){
    fetch(`${baseURL}pokemon/${c}`)
    .then(response=>response.json() )
    .then(respuestaParsiada=>{
        mostrarPokemon(respuestaParsiada)
        console.log(respuestaParsiada)

    })
    .catch(error=>console.error("errorsazo"));
}

fetchData();

function mostrarPokemon(pokemonData){
    let card = document.getElementsByClassName("card")[0];
    let img = document.getElementsByTagName("img")[0]
    let nombre = document.getElementsByClassName("card__name")[0];


    img.src= pokemonData.sprites.other.dream_world.front_default;
    nombre.textContent= pokemonData.name;

}

let body = document.getElementsByTagName("body")[0];
body.addEventListener("click", function(evento){
    console.log(evento.target.className);
    if(evento.target.className=="card__containerButtons__next"){
        ++c;
        pokeid.textContent=`ID de Pokemon: ${c}`
        fetchData();
    }
    else if(evento.target.className=="card__containerButtons__back") {
        if(c>1){
            --c;
            pokeid.textContent=`ID de Pokemon: ${c}`
            fetchData();
        }
    }
    else if(evento.target.className=="buscar"){
        c= input.value;
        input.value="";
        pokeid.textContent=`ID de Pokemon: ${c}`
        fetchData();
        

    }
    
    
})