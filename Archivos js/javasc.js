//Almacenar el slider y los botones en variables
var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
//Mover la imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//Mostrar la primera imagen
slider.css('margin-left', '-'+100+'%');
//Funcion mover a la derecha que intercambia la primera imagen con la ultima
function moverD(){
    slider.animate({marginLeft:'-'+200+'%'},700,function(){
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left','-'+100+'%');
    });
}
//Funcion mover a la izquierda que intercambia la ultima imagen con la primera
function moverI(){
    slider.animate({marginLeft:0},700,function(){
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left','-'+100+'%');
    });
}
//Funcion on click para el boton next
siguiente.on('click',function(){
    moverD();
});
//Funcion on click para el boton prev
anterior.on('click',function(){
    moverI();
});
//Funcion para que el slide sea automatico
function autoplay()
{
    interval = setInterval(function(){
        moverD();
    },7000);
}
//Llamamos a la funcion de autoplay
autoplay();