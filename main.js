$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,

        arrows:false
    })
    $('.produtos button').click(function (e) { 
        e.preventDefault();
        
        alert("Seu produto foi adicionado no carrinho de compras.")
    });


    });