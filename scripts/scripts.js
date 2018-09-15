

// funcion que almacena el like
function toggleColor() {
    var corazon = document.getElementById("toggle-color");
    if (corazon.style.color == "red"){
        corazon.style.color = "black";
    } else {
        corazon.style.color = "red";
    }
}

function calcularPrecioMetroCuadrado(precio, superficie) {
    var precioPorM2 = parseInt(precio)/parseInt(superficie);
    var resultado = parseInt(precioPorM2);
    return resultado;
}

function convertirResultado(num){
    var texto = toString(num); //aca se almacena el num
    var largo = texto.lenght; //largo del num
    var productoFinal = ""; //aca se concatena el resultado final
    var contador = 2; 
    for (var i = largo; i !== 0; --i){
        if (contador < 2) {
            productofinal = texto + productofinal;
        }
    }
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

function previousPhoto(){
    console.log("algo");
}