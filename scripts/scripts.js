
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
};

//funcion que calcula el precio por metro cuadrado
function calcularPrecioMetroCuadrado() {
    var precio = propiedad.precio;
    var superficie = propiedad.m2;
    var precioPorM2 = parseInt(precio)/parseInt(superficie);
    var resultado = parseInt(precioPorM2); //se usa otra vez "parseInt" para elimminar los decimales
    document.getElementById("m2price").innerHTML = valorNumerico(resultado);
    console.log(resultado);
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
    
    //comprueba si existe localStorage del precio - si no existe se crea tomando el valor del objeto "propiedad" creado
    if (localStorage.getItem("precioPropiedad") == null){
        localStorage.setItem("precioPropiedad", propiedad.precio)
        console.log("no existe local storage\nse crea local storage\nPropiedad= "+localStorage.getItem("precioPropiedad"));
    }

    //si ya existe un localStorage pasamos su valor al objeto "propiedad"
    propiedad.precio = localStorage.getItem("precioPropiedad");
    //console.log("\nSe recupera el precio\nPropiedad= " +  localStorage.getItem("precioPropiedad"));

    
    var dibujarPrecio = document.getElementById("fullprice");                           //nodo del DOM donde se dibuja el precio
    var valor = "U&#36;S" + valorNumerico( localStorage.getItem("precioPropiedad") );   //se convierte el numero almacenado a valor monetario
    console.log("valor es de " + valor);
    dibujarPrecio.innerHTML = valor;                                                    //se dibuja el valor en el DOM
};

function cambiarPrecio(){
    var nuevoPrecio = document.getElementById("nuevoPrecio").value;
    localStorage.setItem("precioPropiedad", nuevoPrecio);
    alert("precioCambiado a: " + nuevoPrecio);
    //falta terminar
};

window.onload = function(){
    setearLike();
    setearPrecio();
    calcularPrecioMetroCuadrado();
};