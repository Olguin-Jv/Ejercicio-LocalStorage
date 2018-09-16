


//comprueba si hay localStorage del like
//si no lo hay lo crea
function setearLike() {
    
    if (localStorage.getItem("likeColor") == null){
        //console.log("no existe local storage");
        localStorage.setItem("likeColor", "blue");
        //console.log(localStorage);
    } else {
        //console.log("ya existe local storage");
        //console.log(localStorage);
    }
    
    var corazon = document.getElementById("toggle-color");
    corazon.style.color = localStorage.getItem("likeColor");

};

//funcion que activa y desactiva el like a la publicación
function toggleLike() {
    
    var corazon = document.getElementById("toggle-color");

    if (localStorage.getItem("likeColor") == "blue"){
        localStorage.setItem("likeColor", "red");
        corazon.style.color = "red";
    } else {
        localStorage.setItem("likeColor", "blue");
        corazon.style.color = "blue";
    }
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


function setearPrecio(){
    
    if (localStorage.getItem("precioPropiedad") == null){
        localStorage.setItem("precioPropiedad", propiedad.precio)
        console.log("no existe local storage\nse crea local storage\nPropiedad= "+localStorage.getItem("precioPropiedad"));
    }

    propiedad.precio = localStorage.getItem("precioPropiedad");
    console.log("\nSe recupera el precio\nPropiedad= " +  localStorage.getItem("precioPropiedad"));
    var nodoPadre = document.getElementById("price");                               //nodo padre
    var nodoPrecioActual = document.getElementById("fullprice");                    //nodo hijo
    var valor = valorNumerico( localStorage.getItem("precioPropiedad") );   //valor
    console.log("valor es de " + valor);

    /* HASTA ACÁ ESTO FUNCIONA */

    /* 
    var nodoNuevoPrecio = document.createElement("p");                              //creo nuevo p
    nodoNuevoPrecio.setAttribute("id", "fullprice");                                //atributo id
    nodoNuevoPrecio.appendChild(valorNumerico(valorNumerico));                      //entrego valor a p
    console.log(valorEnPrecio);
    */
    
    //nodoPadre.replaceChild(nodoNuevoPrecio, nodoPrecioActual);


    // var texto = document.createTextNode(precioDOM);
    // console.log(texto);
    // precioDOM.appendChild(texto);

}

function cambiarPrecio(){
    var nuevoPrecio = document.getElementById("nuevoPrecio").value;
    localStorage.setItem("precioPropiedad", nuevoPrecio);
    alert("precioCambiado a: " + nuevoPrecio);
}

window.onload = function(){
    setearLike();
    setearPrecio()
}