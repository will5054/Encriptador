const d = document;
const textarea = d.querySelector(".form__input");
const imagenmuneco = d.querySelector(".result__img");
const loaderbatman = d.querySelector(".loader");
const resultadotitulo = d.querySelector(".result__title");
const resultadotexto = d.querySelector(".result__text");
const botonencriptar = d.querySelector(".form__btn");
const botondesencriptar = d.querySelectorAll(".form__btn");
const botoncopiar = d.querySelector(".result__btn");
const llaves = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"]
];
//funcion para encriptar
function encriptarmensaje(mensaje) { 
    let mensajeencriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]){ 
                encriptada = llaves[j][1]; // reemplaza la letra equivalente encriptado
                break; //termina el bucle cuando se encuentra la correspondencia
    }
        }
        mensajeencriptado += encriptada;
     }       
     return mensajeencriptado; 
    } 
 // funcion para desencriptar
    function desencriptarmensaje(mensaje) {
        let mensajedesencriptado = mensaje;
        for (let i = 0; i < llaves.length; i++) {
            let regex = new RegExp(llaves[i][1], 'g');
            mensajedesencriptado = mensajedesencriptado.replace(regex, llaves[i][0]); // reemplaza el texto encriptado por su equivalente original
        }
            return mensajedesencriptado; // devuelve el mesnaje desencriptado
     }
//ocultar elemnetos dinamicamente
textarea.addEventListener("input", (e) => {
    imagenmuneco.style.display = "none";
    loaderbatman.classList.remove("hidden")
    resultadotitulo.textContent = "Capturando mensaje.";
    resultadotexto.textContent = "";    
});
//funcion del boton encriptar
botonencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeencriptado = encriptarmensaje(mensaje);
    resultadotexto.textContent = mensajeencriptado;
    botoncopiar.classList.remove("hidden");
    resultadotitulo.textContent = "el resultado es:";
});
//funcion del boton desencriptar
botondesencriptar[1].addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajedesencriptado = desencriptarmensaje(mensaje);
    resultadotexto.textContent = mensajedesencriptado;
    resultadotitulo.textContent = "el resultado es:";
});
botoncopiar.addEventListener("click", ()=>{
    let textocopiado = resultadotexto.textContent;
    navigator.clipboard.writeText(textocopiado).then(()=> {
        imagenmuneco.style.display = "block";
        loaderbatman.classList.add("hidden");
        resultadotitulo.textContent = "el texto se copio";   
        botoncopiar.classList.add("hidden");
        resultadotexto.textContent = "";
    })
});