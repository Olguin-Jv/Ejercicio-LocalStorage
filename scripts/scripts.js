var corazon = document.getElementById("toggle-color");

function setearLike() {
    
    if (localStorage.getItem("likeColor") == null){
        console.log("no existe local storage");
        localStorage.setItem("likeColor", "blue");
        console.log(localStorage);
    } else {
        console.log("ya existe local storage");
        console.log(localStorage);
    }

    var corazon = document.getElementById("toggle-color");
    corazon.style.color = localStorage.getItem("likeColor");
};



function toggleLike() {
    if (corazon.style.color == "red"){
        corazon.style.color = "black";
    } else {
        corazon.style.color = "red";
    }
}

window.onload = function(){
    setearLike();
}

//funcion que calcula el precio por metro cuadrado
function calcularPrecioMetroCuadrado(precio, superficie) {
    var precioPorM2 = parseInt(precio)/parseInt(superficie);
    var resultado = parseInt(precioPorM2); //le saco los decimales
    return resultado;
};

//funcion que coloca los "." debidos a la cantidad numerica
function valorNumerico(num) {
    var valor = parseInt(num);
    return valor.toLocaleString();
};

function nextPhoto() {
    var fotoActual = document.getElementById("gallery");
    var fotoNueva = fotoActual.cloneNode();
    var padre = document.getElementById("gallery").parentNode;

    if (propiedad.fotosIndice < propiedad.fotos.length-1){
        propiedad.fotosIndice++ ;
    }   else if (propiedad.fotosIndice == propiedad.fotos.length-1) {
        propiedad.fotosIndice = 0;
    }
    
    fotoNueva.src = propiedad.fotos[propiedad.fotosIndice];
    padre.replaceChild(fotoNueva, fotoActual);
};

function previousPhoto(){
    var fotoActual = document.getElementById("gallery");
    var fotoNueva = fotoActual.cloneNode();
    var padre = document.getElementById("gallery").parentNode;

    if (propiedad.fotosIndice > 0){
        propiedad.fotosIndice--;
    }   else {
        propiedad.fotosIndice = propiedad.fotos.length-1;
    }
    
    fotoNueva.src = propiedad.fotos[propiedad.fotosIndice];
    padre.replaceChild(fotoNueva, fotoActual);
};