

// funcion que almacena el like
function toggleColor() {
    var corazon = document.getElementById("toggle-color");
    if (corazon.style.color == "red"){
        corazon.style.color = "black";
    } else {
        corazon.style.color = "red";
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