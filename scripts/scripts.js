

// funcion que cambia de color el corazon
function toggleColor() {
    var corazon = document.getElementById("toggle-color");
    if (corazon.style.color == "red"){
        corazon.style.color = "black";
    } else {
        corazon.style.color = "red";
    }
}

//funcion que calcula el precio por metro cuadrado
function calcularPrecioMetroCuadrado(precio, superficie) {
    var precioPorM2 = parseInt(precio)/parseInt(superficie);
    var resultado = parseInt(precioPorM2); //le saco los decimales
    return resultado;
}

//funcion que coloca los "." debidos a la cantidad numerica
function valorNumerico(num) {
    var valor = parseInt(num);
    return valor.toLocaleString();
}

var fotos = ["img/01.jpg", "img/02.jpg", "img/03.jpg"];
var fotoActual = 0;

function nextPhoto() {
    var thumbnail = document.getElementById("fotos");
    if (fotoActual == 2){
        fotoActual = 0;
        thumbnail.src = fotos[fotoactual];
        fotoActual += 1;
        console.log(thumbnail.src);
    } else {
        thumbnail.src = fotos[fotoactual];
        fotoActual += 1;
        console.log(fotoActual);
    }
}

/*
para el slider hay que copiar el nodo,
clonarlo
editar el clon y modificarle el src
reeplazar el nodo viejo con el nuevo
voilá!
*/

function previousPhoto(){
    console.log("algo");
}