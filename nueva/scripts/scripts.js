//comprueba si hay localStorage del like
//si no lo hay lo crea
function setearLike() {
    
    if (localStorage.getItem("likeColor") == null){
        //console.log("no existe local storage");
        localStorage.setItem("likeColor", "black");
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

    if (localStorage.getItem("likeColor") == "black"){
        localStorage.setItem("likeColor", "red");
        corazon.style.color = "red";
    } else {
        localStorage.setItem("likeColor", "black");
        corazon.style.color = "black";
    }
};



//foto siguiente
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



//foto anterior
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



//funcion que calcula el precio por metro cuadrado
function calcularPrecioMetroCuadrado() {
    var precio = propiedad.precio;
    var superficie = propiedad.m2;
    var precioPorM2 = parseInt(precio)/parseInt(superficie);                         //calculo para obtener precio por metro cuadrado

    if (parseInt(precioPorM2) == 0 ) {
        var resultado = precioPorM2;
        document.getElementById("m2price").innerHTML = resultado.toFixed(2);
    } else {
        var resultado = parseInt(precioPorM2);                                      //se usa otra vez "parseInt" para elimminar los decimales
        document.getElementById("m2price").innerHTML = resultado;                   //se dibuja el precio en el dom
    }

};



//funcion que coloca los "." debidos a la cantidad numerica
function valorNumerico(num) {
    var valor = parseInt(num);
    return valor.toLocaleString();
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
    var valor = "U&#36;S " + valorNumerico( localStorage.getItem("precioPropiedad") );   //se convierte el numero almacenado a valor monetario
    //console.log("valor es de " + valor);
    dibujarPrecio.innerHTML = valor;                                                    //se dibuja el valor en el DOM
};



function cambiarPrecio(){
    var nuevoPrecio = document.getElementById("nuevoPrecio").value;

    if (!isNaN(nuevoPrecio)){
        localStorage.setItem("precioPropiedad", nuevoPrecio);
        propiedad.precio = localStorage.getItem("precioPropiedad");
        // console.log("precioCambiado a: " + nuevoPrecio);
        calcularPrecioMetroCuadrado();
        document.getElementById("fullprice").innerHTML = "U&#36;S " + valorNumerico(nuevoPrecio);
    }

    document.getElementById("nuevoPrecio").value = "";
};



function abrirModal(){
    var modal = document.getElementById("modal-container");
    modal.style.display = "flex";
};



function enviarMail(){
    var expresion = /\w+@\w+\.+[a-z]/;
    var mailIngresado = document.getElementById("mail-ingresado").value

    if (!expresion.test(mailIngresado)){
        // console.log("no es un mail");
        document.getElementById("mensajeDeError").style.display = "flex";
        document.getElementById("mail-ingresado").style.borderBottom = "2px solid red";
    }

    if (expresion.test(mailIngresado)){
        //esta no es la manera correcta de hacer lo siguiente
        //opté por esto sólo por una cuestión práctica
        document.getElementById("mail-ingresado").value = "";
        document.getElementById("modal-container").style.display = "none";
        document.getElementById("mensajeDeError").style.display = "none";
        document.getElementById("mail-ingresado").style.borderBottom = "1px solid rgba(128, 128, 128, 0.415)";
    };
};

function cerrarModal(){
    document.getElementById("mail-ingresado").value = "";
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("mensajeDeError").style.display = "none";
    document.getElementById("mail-ingresado").style.borderBottom = "1px solid rgba(128, 128, 128, 0.415)";
};

window.onload = function(){
    setearLike();
    setearPrecio();
    calcularPrecioMetroCuadrado();
};