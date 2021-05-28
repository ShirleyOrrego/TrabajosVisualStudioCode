$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora serás enviado a la página de la USAT")
    })
});

//Ocultar o mostrar el menú
$("#c1b").click(function(){
    $("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
});
