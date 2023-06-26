const sectionInicioLucha = document.getElementById('inicio-de-lucha');
const sectionAnimacion = document.getElementById('animacion-lucha');
const sectionReiniciar = document.getElementById('reiniciar');
//const botonMascotaJugador = document.getElementById('boton-mascota');
//let botonMascotaJugador = document.querySelectorAll('.btn-seleccionar');
const botonReiniciar = document.getElementById('boton-reiniciar');
/*const botonJugarDeNuevo = document.getElementById('boton-jugar-nuevamente');*/
const botonIniciarDuelo = document.getElementById("boton-lucha");
const sectionSeleccionarTipoInicio = document.getElementById("seleccionar-tipo");
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const spanVictoriasJugador = document.getElementById('victorias-jugador');
const spanVictoriasEnemigo = document.getElementById('victorias-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');
const contenedorAtaquesEnemigo = document.getElementById('botones-ataques-enemigo');
const tipoMascotaJugador = document.getElementById('mascota-jugador__tipo');
const tipoMascotaEnemigo = document.getElementById('mascota-enemigo__tipo');
const nivelMascotaJugador = document.getElementById('mascota-jugador__nivel');
const nivelMascotaEnemigo = document.getElementById('mascota-enemigo__nivel');
const fotoCombateEnemigo = document.getElementById('foto-enemigo');
const fotoCombateJugador = document.getElementById('foto-jugador');
const cajonMensajes = document.getElementById("mensajes");
const cajonPersonajeJugador = document.getElementById("personaje-jugador");
const cajonPersonajeEnemigo = document.getElementById("personaje-enemigo");

const btnSeleccionarAgua = document.getElementById('boton-seleccionar-agua');
const btnSeleccionarPlanta = document.getElementById('boton-seleccionar-planta');
const btnSeleccionarFuego = document.getElementById('boton-seleccionar-fuego');

/*if (localStorage.getItem('mascotaJugador') !== null) {
   mascotaJugador = JSON.parse(localStorage.getItem('mascotaJugador'));
  } else {
    mascotaJugador = 0;
  }*/
let tipoSeleccionado;
let mokepones = [];
let colores = [];
let elementosTarjetas = [];
let seccionPoderes = [];
let poderesMokepon;
let ataqueJugador;
let ataqueEnemigo;
let botonMascotaJugador= [];

let ataquesTarjetas;
let opcionDeMokepones;
let ataquesMokepon;
let ataquesMokeponE;
let ataquesMokeponEnemigo;
let mascotas;
let mascotaJugador;
let mascotaEnemigo = 0;
let botones = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let contadorAtaques = 0;
let fotoMokeponEnemigo;
let fotoMokeponJugador;
let extraccionMascotaJugador;
let ataques;
let nuevoAtaqueDelJugador;
let tipoEnemigo;
let tipoJugador;
let nivelJugador;
let nivelEnemigo;

let inputHipodoge;
let inputCapipepo; 
let inputRatigueya; 
let inputTucapalma;
let inputPydos; 
let inputLangostelvis; 
let inputKingpingcold;
let inputSerpentherb; 
let inputLeaflion; 
let ningunaSeleccionada = true;

let botonAgua;
let botonFuego;
let botonPlanta;
let botonEstrella;

//sonidos
let sonidoBoton = new Audio("./sonidos/interface.mp3");
let sonidoSeccionInicial = new Audio("./sonidos/cottagecore-bienvenida.mp3");
let sonidoSeleccionPersonaje = new Audio("./sonidos/seleccionPersonaje.mp3");
let sonidopostSeleccionPersonaje = new Audio("./sonidos/decide.mp3");
let sonidoBatalla = new Audio("./sonidos/musicBattle.mp3");
let sonidoMensajeFinalGanador = new Audio("./sonidos/orquesta-mensaje-final-ganador.mp3");
let sonidoEmpateSimple = new Audio("./sonidos/sword-empates.mp3");
let sonidoMensajeFinalDerrota = new Audio("./sonidos/negative-perder.mp3");
let sonidoMensajeFinalEmpate = new Audio("./sonidos/low-impactwav-empate-general.mp3");
let sonidoAtaqueFuego = new Audio("./sonidos/fire-magic-6947.mp3");
let sonidoAtaqueAgua = new Audio("./sonidos/sandy-beach-corto.mp3");
let sonidoAtaqueEstrella = new Audio("./sonidos/the-magical-surprise-141291.mp3");
let sonidoAtaquePlanta = new Audio("./sonidos/swoosh- ataque-planta.mp3")
let sonidoPerdidaSimple = new Audio("./sonidos/failure-sonido-perdida.mp3");
let sonidoGanadaSimple = new Audio("./sonidos/correct-ganar.mp3");
let sonidoExplosion = new Audio("./sonidos/bad-explosion.mp3");
let sonidoDenegacionPersonaje = new Audio("./sonidos/wrong-answer.mp3");
let sonidoInicioLucha = new Audio("./sonidos/conteo-three-two-one-fight.mp3");

//colores
let colorNivelNovato = 'linear-gradient(to left, rgb(236, 236, 107), rgb(235, 176, 15))';
let colorNivelIntermedio = 'linear-gradient(to left, #9E4784, #D27685)';
let colorNivelSuperior = 'linear-gradient(to left,rgb(121, 93, 185),rgb(104, 46, 197))';

class PackColors{
    constructor(fondoBackground, fondoImagen, fondoPoderes, fondoResena, fuenteResena, botonSeleccionar){
        this.fondoBackground = fondoBackground;
        this.fondoImagen = fondoImagen;
        this.fondoPoderes = fondoPoderes;
        this.fondoResena = fondoResena;
        this.fuenteResena = fuenteResena;
        this.botonSeleccionar = botonSeleccionar;
    }
}

let coloresPlanta = new PackColors(
    'linear-gradient(to left,rgb(44, 214, 129), rgb(4, 150, 77))',
    'linear-gradient(to left,rgb(248, 248, 250),rgb(151, 196, 177))',
    'linear-gradient(to left,rgb(4, 150, 77), rgb(11, 51, 31))',
    'linear-gradient(to left,rgb(145, 233, 189), rgb(153, 212, 183))',
    '#025464',
    'linear-gradient(to left,rgb(20, 90, 55), rgb(11, 51, 31))'
);

let coloresAgua = new PackColors(
    'linear-gradient(to left, rgb(44, 203, 214), rgb(8, 88, 104))',
    'linear-gradient(to left,rgb(248, 248, 250),rgb(146, 202, 195))',
    'linear-gradient(to left,rgb(25, 14, 182), rgb(15, 11, 51))',
    'linear-gradient(to left,rgb(145, 227, 233), rgb(153, 198, 212))',
    'rgb(34, 24, 121)',
    'linear-gradient(to left,rgb(25, 14, 182), rgb(57, 38, 236))'
);

let coloresFuego = new PackColors(
    'linear-gradient(to left,rgb(245, 131, 0),rgb(219, 13, 48))',
    'linear-gradient(to left,rgb(248, 248, 250),rgb(202, 146, 146))',
    'linear-gradient(to left,rgb(245, 0, 41), rgb(95, 16, 29))',
    'linear-gradient(to left,rgb(233, 148, 145), rgb(255, 223, 223))',
    'rgb(109, 15, 15)',
    'linear-gradient(to left,rgb(221, 64, 90), rgb(219, 13, 48))'
);

colores.push(coloresPlanta, coloresAgua, coloresFuego);


class Mokepon{
    constructor(nombre, foto, tipo, nivel){
        this.nombre = nombre;
        this.foto = foto;
        this.tipo = tipo;
        this.nivel = nivel;
        this.ataques = [];
    }
}

let pydos = new Mokepon('Pydos', './Assets/mokepons_pydos.png','💧', 'Novato 💫');
let hipodoge = new Mokepon('Hipodoge', './Assets/mokepons_hipodogue.png','💧', 'Intermedio ✨' );
let kingpingcold = new Mokepon('Kingpingcold', './Assets/mokepons_kingpingcold.png', '💧','Superior 🔯');
let capipepo = new Mokepon('Capipepo', './Assets/mokepons_capipepo.png','🌱', 'Novato 💫');
let leaflion = new Mokepon('Leaflion', './Assets/mokepons_leaflion.png', '🌱', 'Intermedio ✨');
let serpentherb = new Mokepon('Serpentherb', './Assets/mokepons_serpentherb.png', '🌱', 'Superior 🔯');
let ratigueya = new Mokepon('Ratigueya', './Assets/mokepons_ratigueya.png','🔥', 'Novato 💫');
let langostelvis = new Mokepon('Langostelvis', './Assets/mokepons_langostelvis.png', '🔥', 'Intermedio ✨');
let tucapalma = new Mokepon('Tucapalma', './Assets/mokepons_tucapalma.png','🔥', 'Superior 🔯');

pydos.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
);

hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-planta'},
);

kingpingcold.ataques.push(
    {nombre: '🌟', id:'boton-estrella'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-planta'},
);

capipepo.ataques.push(
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
);

leaflion.ataques.push(
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
);

serpentherb.ataques.push(
    {nombre: '🌟', id:'boton-estrella'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
);

ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-planta'},
);

langostelvis.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '💧', id:'boton-agua'},
);

tucapalma.ataques.push(
    {nombre: '🌟', id:'boton-estrella'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '🌱', id:'boton-planta'},
    {nombre: '💧', id:'boton-agua'},
    
);

mokepones.push(
    pydos, hipodoge, kingpingcold,
    capipepo, leaflion, serpentherb, 
    ratigueya, langostelvis, tucapalma  
);


function reproducirSonidoFuego(){
    sonidoAtaqueFuego.play();
}

function reproducirSonidoAgua(){
    sonidoAtaqueAgua.play();
}

function reproducirSonidoEstrella(){
    sonidoAtaqueEstrella.play();
}

function reproducirSonidoPlanta(){
    sonidoAtaquePlanta.play();
}

function pausarAudios(){
     if (sonidoBatalla.play()){
            sonidoBatalla.pause();
            sonidoBatalla.currentTime = 0;
        }
}

function activarAudios(){
    sonidoBatalla.play();
}

function explosionEstrellas(){
    crearMensaje('💥EXPLOSIÓN DE PODER 💥');
        sonidoExplosion.play();
        if(victoriasJugador === victoriasEnemigo){
            //EMPATE Y TODO QUEDA IGUAL;
        } else if (victoriasJugador > victoriasEnemigo){
            victoriasJugador--;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }else {
            victoriasEnemigo--;
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo; 
        }
}

function ganaste(){
    crearMensaje('GANASTE!!😎');
    victoriasJugador++;
    spanVictoriasJugador.innerHTML = victoriasJugador;
    sonidoGanadaSimple.play();
}

/*function seleccionarTipo(tipo){
   
   if(tipo == 'agua'){
        tipoSeleccionado = '💧';}
    if(tipo == 'fuego'){
        tipoSeleccionado = '🔥';}
    if(tipo == 'planta'){
        tipoSeleccionado = '🌱';}
}*/




function iniciarJuego(){
    //sonidoSeccionInicial.loop = true;
    //sonidoSeccionInicial.play();
    sectionSeleccionarTipoInicio.style.display = 'flex';
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'none';
    sectionAnimacion.style.display = "none";
    sectionReiniciar.style.display ='none';
    sectionInicioLucha.style.display ='flex';
    /*botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);*/
    botonReiniciar.addEventListener('click', reiniciarJuego);
    /*botonJugarDeNuevo.addEventListener('click', volverAJugar);*/
    botonIniciarDuelo.addEventListener('click', iniciarDuelo);
    btnSeleccionarAgua.addEventListener('click', function() {
        tipoSeleccionado = '💧'
        cargaDeTarjetas()});
    btnSeleccionarPlanta.addEventListener('click', function() {
        tipoSeleccionado = '🌱'
        cargaDeTarjetas()});
    btnSeleccionarFuego.addEventListener('click', function() {
        tipoSeleccionado = '🔥'
        cargaDeTarjetas()});
}

function cargaDeTarjetas(){
    
    //codigo para crear desde 0 cada tarjeta mokepon, usando los datos de la clase Mokepon.
    mokepones.forEach((mokepon) => {
        if(mokepon.tipo === tipoSeleccionado){
       opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre}>
        <label id="tarjeta-de-mokepon" class="tarjetas-varias" for=${mokepon.nombre}>
            <div id="area-titulo-mokepon">
                <span class="nombre-mokepon">${mokepon.nombre}</span>
                <span class="tipo-mokepon">${mokepon.tipo}</span>
            </div>
            <div class="recuadro-foto-mokepon">
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
                <span>${mokepon.tipo}</span>
                
            </div>
            <div class="poderes-mokepon"><span>${mokepon.tipo}</span></div>
            <div class="nivel-mokepon">
                <p>${mokepon.nivel}</p>
            </div>
            <div class="resena-mokepon"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim praesentium aperiam, rem alias totam amet dolor ducimus, debitis dicta et doloribus animi tenetur quisquam? Nesciunt assumenda maxime blanditiis laborum.</p><span>${mokepon.tipo}</span></div>
            <div class="boton-seleccionar">
             <button class="btn-seleccionar" id="boton-seleccionar">Seleccionar<span>${mokepon.tipo}</span></button>
            </div>
        </label>
         `
    }else {return};

    sectionSeleccionarTipoInicio.style.display ='none';
    sectionSeleccionarMascota.style.display = 'flex'

    contenedorTarjetas.innerHTML += opcionDeMokepones;

    if(tipoSeleccionado == '💧'){
        inputPydos = document.getElementById('Pydos');
        inputHipodoge = document.getElementById('Hipodoge');
        inputKingpingcold = document.getElementById('Kingpingcold');
    }
    if(tipoSeleccionado == '🌱'){
        inputCapipepo = document.getElementById('Capipepo');
        inputLeaflion = document.getElementById('Leaflion');
        inputSerpentherb = document.getElementById('Serpentherb');
    }
    if(tipoSeleccionado == '🔥'){
        inputRatigueya = document.getElementById('Ratigueya');
        inputLangostelvis = document.getElementById('Langostelvis');
        inputTucapalma = document.getElementById('Tucapalma');
        }
});

//codigo para integrar los estilos a las tarjetas de cada mokepon
elementosTarjetas = document.querySelectorAll(".tarjetas-varias, .recuadro-foto-mokepon, .nivel-mokepon, .poderes-mokepon, .resena-mokepon, .btn-seleccionar");


elementosTarjetas.forEach((tarjeta) => {
    if (tarjeta.className === "tarjetas-varias" && tarjeta.innerHTML.includes('💧')) {
        tarjeta.style.backgroundImage = coloresAgua.fondoBackground;}
    if (tarjeta.className === "tarjetas-varias" && tarjeta.innerHTML.includes('🔥')) {
        tarjeta.style.backgroundImage = coloresFuego.fondoBackground;}
    if (tarjeta.className === "tarjetas-varias" && tarjeta.outerHTML.includes('🌱')) {
        tarjeta.style.backgroundImage = coloresPlanta.fondoBackground;}
    if(tarjeta.className === "btn-seleccionar" && tarjeta.innerHTML.includes('💧')){
        tarjeta.style.backgroundImage = coloresAgua.botonSeleccionar;}
    if(tarjeta.className === "btn-seleccionar" && tarjeta.innerHTML.includes('🔥')){
        tarjeta.style.backgroundImage = coloresFuego.botonSeleccionar;}
    if(tarjeta.className === "btn-seleccionar" && tarjeta.innerHTML.includes('🌱')){
        tarjeta.style.backgroundImage = coloresPlanta.botonSeleccionar;}
    if(tarjeta.className === "recuadro-foto-mokepon" && tarjeta.innerHTML.includes('💧')){
        tarjeta.style.backgroundImage = coloresAgua.fondoImagen;}
    if(tarjeta.className === "recuadro-foto-mokepon" && tarjeta.innerHTML.includes('🔥')){
        tarjeta.style.backgroundImage = coloresFuego.fondoImagen;}
    if(tarjeta.className === "recuadro-foto-mokepon" && tarjeta.innerHTML.includes('🌱')){
        tarjeta.style.backgroundImage = coloresPlanta.fondoImagen;}
    if(tarjeta.className === "poderes-mokepon" && tarjeta.innerHTML.includes('💧')){
        tarjeta.style.backgroundImage = coloresAgua.fondoPoderes;}
    if(tarjeta.className === "poderes-mokepon" && tarjeta.innerHTML.includes('🔥')){
        tarjeta.style.backgroundImage = coloresFuego.fondoPoderes;}
    if(tarjeta.className === "poderes-mokepon" && tarjeta.innerHTML.includes('🌱')){
        tarjeta.style.backgroundImage = coloresPlanta.fondoPoderes;}
    if(tarjeta.className === "resena-mokepon" && tarjeta.innerHTML.includes('💧')){
        tarjeta.style.backgroundImage = coloresAgua.fondoResena;
        tarjeta.style.color = coloresAgua.fuenteResena;}
    if(tarjeta.className === "resena-mokepon" && tarjeta.innerHTML.includes('🔥')){
        tarjeta.style.backgroundImage = coloresFuego.fondoResena;
        tarjeta.style.color = coloresFuego.fuenteResena;}
    if(tarjeta.className === "resena-mokepon" && tarjeta.innerHTML.includes('🌱')){
        tarjeta.style.backgroundImage = coloresPlanta.fondoResena;
        tarjeta.style.color = coloresPlanta.fuenteResena;}
    if(tarjeta.className == "nivel-mokepon" && tarjeta.innerHTML.includes('💫')){
        tarjeta.style.backgroundImage = colorNivelNovato;
        tarjeta.style.color = 'rgb(95, 16, 29)';}      
    if(tarjeta.className == "nivel-mokepon" && tarjeta.innerHTML.includes('✨')){
        tarjeta.style.backgroundImage = colorNivelIntermedio;}
    if(tarjeta.className == "nivel-mokepon" && tarjeta.innerHTML.includes('🔯')){
        tarjeta.style.backgroundImage = colorNivelSuperior;}  
    }); 
   
   
 //codigo para integrar los poderes de cada mokepon en las tarjetas
  seccionPoderes = document.querySelectorAll('.poderes-mokepon');

      if(seccionPoderes.length === mokepones.length){
    seccionPoderes.forEach((poderes, index) => {
        let ataquesTarj = mokepones[index].ataques;
        let ataquesMokeponesTarjetas = '';

        for (let i = 0; i < ataquesTarj.length; i++) {
            ataquesMokeponesTarjetas += `<li class=${ataquesTarj[i].id}>${ataquesTarj[i].nombre}</li>`;
         }
        poderes.innerHTML = ataquesMokeponesTarjetas; 
            
        }); 
    }; 
    
    botonMascotaJugador= document.querySelectorAll('.btn-seleccionar');

    botonMascotaJugador.forEach(boton => {
        boton.addEventListener('click', seleccionarMascotaJugador);
    });
}


function seleccionarMascotaJugador(){
    if(tipoSeleccionado == '💧'){
        mascotas = {
                inputPydos: {
                    name: pydos,
                    id: Pydos,
                    tipo: pydos.tipo,
                    foto: pydos.foto,
                    nivel: pydos.nivel},

                inputHipodoge: {
                    name: hipodoge,
                    id: Hipodoge,
                    tipo: hipodoge.tipo,
                    foto: hipodoge.foto,
                    nivel: hipodoge.nivel},

                inputKingpingcold: {
                    name: kingpingcold,
                    id: Kingpingcold,
                    tipo: kingpingcold.tipo,
                    foto: kingpingcold.foto,
                    nivel: kingpingcold.nivel}
            }};

        if(tipoSeleccionado == '🌱'){
            mascotas = {
                inputCapipepo: {
                    name: capipepo,
                    id: Capipepo,
                    tipo: capipepo.tipo,
                    foto: capipepo.foto,
                    nivel: capipepo.nivel},

                inputLeaflion: {
                    name: leaflion,
                    id: Leaflion,
                    tipo: leaflion.tipo,
                    foto: leaflion.foto,
                    nivel: leaflion.nivel },

                inputSerpentherb: {
                    name: serpentherb,
                    id: Serpentherb,
                    tipo: serpentherb.tipo,
                    foto: serpentherb.foto,
                    nivel: serpentherb.nivel}
                }};

        if(tipoSeleccionado == '🔥'){
            mascotas = {
                inputRatigueya: {
                    name:ratigueya,
                    id: Ratigueya,
                    tipo: ratigueya.tipo,
                    foto: ratigueya.foto,
                    nivel: ratigueya.nivel},

                inputLangostelvis: {
                    name: langostelvis,
                    id: Langostelvis,
                    tipo: langostelvis.tipo,
                    foto: langostelvis.foto,
                    nivel: langostelvis.nivel},

                inputTucapalma:{
                    name: tucapalma,
                    id: Tucapalma,
                    tipo : tucapalma.tipo,
                    foto: tucapalma.foto,
                    nivel: tucapalma.nivel}
                }};
   
            for (let mascota in mascotas) {
        if (mascotas[mascota].id.checked) {
            extraccionMascotaJugador = mascotas[mascota].id;
            mascotaJugador = extraccionMascotaJugador.id;
            eliminarMascotaArray = mascotas[mascota].name;
            extraerAtaques(mascotaJugador);
            mokepones.splice(mokepones.indexOf(eliminarMascotaArray),1);
            seleccionarMascotaEnemigo();
            sectionSeleccionarMascota.style.display = 'none';
            sectionSeleccionarAtaque.style.display = 'flex'; 
            spanMascotaJugador.innerHTML = mascotaJugador;
            tipoMascotaJugador.innerHTML = mascotas[mascota].tipo;
            nivelMascotaJugador.innerHTML = mascotas[mascota].nivel;
            
            tipoJugador = mascotas[mascota].tipo;
            nivelJugador = mascotas[mascota].nivel;
            asignarColorJugador(tipoJugador);
            asignarColorJugador(nivelJugador);
            sonidopostSeleccionPersonaje.play();
            ningunaSeleccionada = false;
            mokepones.forEach(() => {
                fotoMokeponJugador = `<img src=${mascotas[mascota].foto} alt=${mascotaJugador}>
                `
                fotoCombateJugador.innerHTML = fotoMokeponJugador;
            });
        } 
    }
    if (ningunaSeleccionada == true) {
        sonidoDenegacionPersonaje.play();
    } 
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1, -mascotaJugador);
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    tipoMascotaEnemigo.innerHTML =  mokepones[mascotaAleatoria].tipo; 
    nivelMascotaEnemigo.innerHTML =  mokepones[mascotaAleatoria].nivel; 
    mascotaEnemigo = mokepones[mascotaAleatoria].nombre;
    tipoEnemigo = mokepones[mascotaAleatoria].tipo;
    nivelEnemigo = mokepones[mascotaAleatoria].nivel;
    asignarColorEnemigo(tipoEnemigo);
    asignarColorEnemigo(nivelEnemigo);
         
    mokepones.forEach(() => {
        fotoMokeponEnemigo = `<img src=${mokepones[mascotaAleatoria].foto} alt=${mokepones[mascotaAleatoria].nombre}>
        `
            fotoCombateEnemigo.innerHTML = fotoMokeponEnemigo;
    });
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
    secuenciaAtaque();
    mostrarAtaquesEnemigo();
}
    
        
function extraerAtaques(mascotaJugador){
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
    ataquesMokepon = ` <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon;
    })
    
    botones = Array.from(document.querySelectorAll('.BAtaque'));
    botonAgua = document.getElementById('boton-agua');
    botonFuego = document.getElementById('boton-fuego');
    botonPlanta = document.getElementById('boton-planta');
    botonEstrella = document.getElementById('boton-estrella');
}

function mostrarAtaquesEnemigo(){
    ataquesMokeponEnemigo.forEach((ataque) =>{
    ataquesMokeponE = ` <button id=${ataque.id} class="boton-de-ataque-enemigo BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaquesEnemigo.innerHTML += ataquesMokeponE;
    })
}

function asignarColorJugador(tipoNivelPersonaje){
   if(tipoNivelPersonaje == '🔥'){
        cajonPersonajeJugador.style.backgroundImage = coloresFuego.fondoBackground;}
    if(tipoNivelPersonaje == '💧'){
        cajonPersonajeJugador.style.backgroundImage = coloresAgua.fondoBackground;}
    if(tipoNivelPersonaje == '🌱'){
        cajonPersonajeJugador.style.backgroundImage = coloresPlanta.fondoBackground;}
    if(tipoNivelPersonaje == 'Novato 💫'){
        nivelMascotaJugador.style.backgroundImage = colorNivelNovato;}
    if(tipoNivelPersonaje == 'Intermedio ✨'){
        nivelMascotaJugador.style.backgroundImage = colorNivelIntermedio;}
    if(tipoNivelPersonaje == 'Superior 🔯'){
        nivelMascotaJugador.style.backgroundImage = colorNivelSuperior;}
}

function asignarColorEnemigo(tipoNivelPersonaje){
    if(tipoNivelPersonaje == '🔥'){
        cajonPersonajeEnemigo.style.backgroundImage = coloresFuego.fondoBackground;}
    if(tipoNivelPersonaje == '💧'){
        cajonPersonajeEnemigo.style.backgroundImage = coloresAgua.fondoBackground;}
    if(tipoNivelPersonaje == '🌱'){
        cajonPersonajeEnemigo.style.backgroundImage = coloresPlanta.fondoBackground;}
    if(tipoNivelPersonaje == 'Novato 💫'){
        nivelMascotaEnemigo.style.backgroundImage = colorNivelNovato;}
    if(tipoNivelPersonaje == 'Intermedio ✨'){
        nivelMascotaEnemigo.style.backgroundImage = colorNivelIntermedio;}
    if(tipoNivelPersonaje == 'Superior 🔯'){
        nivelMascotaEnemigo.style.backgroundImage = colorNivelSuperior;}
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);
    
    if (ataquesMokeponEnemigo[ataqueAleatorio].nombre == '🔥'){
        ataqueEnemigo ='🔥🔥🔥 FUEGO';
        ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);
    }else if (ataquesMokeponEnemigo[ataqueAleatorio].nombre == '💧'){
        ataqueEnemigo ='💧💧💧 AGUA';
        ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);
    }else if (ataquesMokeponEnemigo[ataqueAleatorio].nombre == '🌟'){
        ataqueEnemigo ='🌟🌟🌟 ESTRELLA';
        ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);
    }else{
        ataqueEnemigo ='🌱🌱🌱 PLANTA';
        ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);
    }
    //console.log(ataqueEnemigo);
    contadorAtaques++;
    combate();
}

function processAttackStart() {
    // Desactivar los botones de ataque
    botones.forEach(button => {
    button.style.backgroundImage = "radial-gradient(circle, rgb(205, 207, 209), rgb(46, 43, 43))";
    button.disabled = true;
    button.style.cursor = "auto";
    });
}

function processAttackEnd() {
    // Activar los botones de ataque
    botones.forEach(button => {
    button.style.backgroundImage = "linear-gradient(to left, rgb(0, 0, 0), rgb(20, 70, 134))";
    button.disabled = false;
    button.style.cursor = "pointer";
    sectionInicioLucha.style.display = 'none';
    sectionAnimacion.style.display = 'flex';
    });
}

function iniciarDuelo(){
    sonidoInicioLucha.play();
    setTimeout(processAttackEnd, 4400);
}

function secuenciaAtaque() {
        sonidoSeccionInicial.pause();
       processAttackStart();
        sonidoBatalla.loop = true;
        sonidoBatalla.play();
    
        botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {
                if(e.target.textContent === '🔥'){
                    ataqueJugador = '🔥🔥🔥 FUEGO';
                    setTimeout(reproducirSonidoFuego, 250);
                    //console.log(ataqueJugador);
                    boton.style.backgroundImage = "radial-gradient(circle, rgb(205, 207, 209), rgb(46, 43, 43))";
                    boton.disabled = true;
                    boton.style.cursor = "auto";
                    sonidoBoton.play();
                    const index = botones.indexOf(boton);
                    botones.splice(index, 1);

                   

                }else if(e.target.textContent  === '💧'){
                    ataqueJugador = '💧💧💧 AGUA';
                    setTimeout(reproducirSonidoAgua, 250);
                    //console.log(ataqueJugador);
                    boton.style.backgroundImage = "radial-gradient(circle, rgb(205, 207, 209), rgb(46, 43, 43))";
                    boton.disabled = true;
                    boton.style.cursor = "auto";
                    sonidoBoton.play();
                    const index = botones.indexOf(boton);
                    botones.splice(index, 1);

                   
                    

                }else if(e.target.textContent  === '🌟'){
                    ataqueJugador = '🌟🌟🌟 ESTRELLA';
                    //console.log(ataqueJugador);
                    setTimeout(reproducirSonidoEstrella, 250);
                    boton.style.backgroundImage = "radial-gradient(circle, rgb(205, 207, 209), rgb(46, 43, 43))";
                    boton.disabled = true;
                    boton.style.cursor = "auto";
                    sonidoBoton.play();
                    const index = botones.indexOf(boton);
                    botones.splice(index, 1);
                    
                
                }else if(e.target.textContent  === '🌱'){
                    ataqueJugador = '🌱🌱🌱 PLANTA';
                    setTimeout(reproducirSonidoPlanta, 250);
                    //console.log(ataqueJugador);
                    boton.style.backgroundImage = "radial-gradient(circle, rgb(205, 207, 209), rgb(46, 43, 43))";
                    boton.disabled = true;
                    boton.style.cursor = "auto";
                    sonidoBoton.play();
                    const index = botones.indexOf(boton);
                    botones.splice(index, 1);

                   
                }
                
                processAttackStart();
                crearAvisoAtaqueJugador();
                setTimeout(ataqueAleatorioEnemigo, 2500);
            
            })
        
        })
    
    
} 


function combate(){
    if(ataqueJugador == '💧💧💧 AGUA' && ataqueEnemigo == '💧💧💧 AGUA' || ataqueJugador == '🔥🔥🔥 FUEGO' && ataqueEnemigo == '🔥🔥🔥 FUEGO' || ataqueJugador == '🌱🌱🌱 PLANTA' && ataqueEnemigo == '🌱🌱🌱 PLANTA') {
        crearMensaje('EMPATE!!');
        sonidoEmpateSimple.play();
    } else if(ataqueJugador == '💧💧💧 AGUA' && ataqueEnemigo == '🔥🔥🔥 FUEGO'){
        ganaste();
    } else if(ataqueJugador == '🔥🔥🔥 FUEGO' && ataqueEnemigo == '🌱🌱🌱 PLANTA'){
        ganaste();
    } else if(ataqueJugador == '🌱🌱🌱 PLANTA' && ataqueEnemigo == '💧💧💧 AGUA'){
        ganaste();    
    } else if(ataqueJugador == '🌟🌟🌟 ESTRELLA' && ataqueEnemigo != '🌟🌟🌟 ESTRELLA'){
        ganaste();
    }else if(ataqueJugador == '🌟🌟🌟 ESTRELLA' && ataqueEnemigo == '🌟🌟🌟 ESTRELLA'){
        explosionEstrellas();
    }else{
        crearMensaje('PERDISTE!! 😣');
        sonidoPerdidaSimple.play();
        victoriasEnemigo++;
        spanVictoriasEnemigo.innerHTML = victoriasEnemigo;
    };
    revisarVictorias();
};


function revisarVictorias(){
   
    if(contadorAtaques == 5 || victoriasJugador == 3 || victoriasEnemigo == 3 ){
        if(victoriasJugador === victoriasEnemigo){
            crearMensajeFinal('ESTO FUE UN EMPATE!! ⚖');
            sonidoMensajeFinalEmpate.play();
        } else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal('FELICITACIONES!! HAS GANADO!! 🎉');
            sonidoMensajeFinalGanador.play();
        }else {
            crearMensajeFinal('HAS PERDIDO!! 😵');
            sonidoMensajeFinalDerrota.play();
        }
    }
   
}
function crearAvisoAtaqueJugador(){
        nuevoAtaqueDelJugador = document.createElement('p');
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
        ataquesDelJugador.insertBefore(nuevoAtaqueDelJugador, ataquesDelJugador.firstChild);
    
}

function crearMensaje(resultado){
        let nuevoAtaqueDelEnemigo = document.createElement('p');
        sectionMensajes.innerHTML = resultado;
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
        ataquesDelEnemigo.insertBefore(nuevoAtaqueDelEnemigo, ataquesDelEnemigo.firstChild);

        if(resultado == 'GANASTE!!😎' ){
            nuevoAtaqueDelJugador.style.backgroundImage = "linear-gradient(to left, rgb(44, 214, 129), rgb(4, 150, 77))";
            nuevoAtaqueDelEnemigo.style.backgroundImage = "linear-gradient(to left, rgb(221, 64, 90), rgb(219, 13, 48))";
            nuevoAtaqueDelJugador.style.boxShadow = "2px 2px 5px rgb(4, 150, 77)";
            nuevoAtaqueDelEnemigo.style.boxShadow = "2px 2px 5px rgb(219, 13, 48)";
            nuevoAtaqueDelEnemigo.style.borderRadius = '20px';
            nuevoAtaqueDelJugador.style.borderRadius = '20px';
            nuevoAtaqueDelEnemigo.style.height = '15%';
            nuevoAtaqueDelJugador.style.height = '15%';
            
        }else if(resultado == 'PERDISTE!! 😣' ){
            nuevoAtaqueDelJugador.style.backgroundImage = "linear-gradient(to left, rgb(221, 64, 90), rgb(219, 13, 48))";
            nuevoAtaqueDelEnemigo.style.backgroundImage = "linear-gradient(to left, rgb(44, 214, 129), rgb(4, 150, 77))";
            nuevoAtaqueDelJugador.style.boxShadow = "2px 2px 5px rgb(219, 13, 48)";
            nuevoAtaqueDelEnemigo.style.boxShadow = "2px 2px 5px rgb(4, 150, 77)";
        }else if(resultado == 'EMPATE!!' ){
            nuevoAtaqueDelJugador.style.backgroundImage = "linear-gradient(to left, rgb(236, 236, 107), rgb(235, 176, 15))";
            nuevoAtaqueDelJugador.style.color='black';
            nuevoAtaqueDelEnemigo.style.backgroundImage = "linear-gradient(to left, rgb(236, 236, 107), rgb(235, 176, 15))";
            nuevoAtaqueDelEnemigo.style.color='black';
            nuevoAtaqueDelJugador.style.boxShadow = "2px 2px 5px rgb(235, 176, 15)";
            nuevoAtaqueDelEnemigo.style.boxShadow = "2px 2px 5px rgb(235, 176, 15)";
        }else if(resultado == '💥EXPLOSIÓN DE PODER 💥'){
            nuevoAtaqueDelJugador.style.background='rgb(27, 25, 25)';
            nuevoAtaqueDelEnemigo.style.background='rgb(27, 25, 25)';
            nuevoAtaqueDelJugador.style.boxShadow = "2px 2px 5px rgb(219, 13, 48)";
            nuevoAtaqueDelEnemigo.style.boxShadow = "2px 2px 5px rgb(219, 13, 48)";
        }
        processAttackEnd();
    
}
function crearMensajeFinal(resultadoFinal){
    sectionAnimacion.style.display = 'none';
    sectionReiniciar.style.display = 'flex';
    sectionMensajes.innerHTML = resultadoFinal;
    processAttackStart();
}

function reiniciarJuego(){
    location.reload();
}

/*function volverAJugar(){
localStorage.setItem(mascotaJugador, JSON.stringify(mascotaJugador));
localStorage.setItem(mascotaEnemigo, JSON.stringify(mascotaEnemigo));
location.reload(false);
mascotaJugador = JSON.parse(localStorage.getItem(mascotaJugador));
mascotaEnemigo = JSON.parse(localStorage.getItem(mascotaEnemigo));
sectionSeleccionarMascota.style.display = 'none';
sectionSeleccionarAtaque.style.display = 'flex';
}*/

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
sonidoMensajeFinalGanador.addEventListener('play', pausarAudios);
sonidoMensajeFinalGanador.addEventListener('ended', activarAudios);

