function rHomepage(){
    location.href="./Homepage.html";
}

function rForms(){
    location.href="./Formulario.html";
}

function rVote(){
    location.href="./Valoraciones.html";
}

// Alerta - Me regresa a la página principal dando en ok o fuera de la ventana
function aviso(){
    swal("¡Genial!","Su propuesto fue registrada, espere que un administrador la apruebe.")
.then((value) => {
  location.href="./Homepage.html";
});
}