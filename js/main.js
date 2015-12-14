$(document).ready(function(){


    var menu = $(".menu");
    var menuOffsetFromTop = menu.position().top;

    $(window).on("scroll", function(event){
        //console.log($(window).scrollTop());
        if($(window).scrollTop() > menuOffsetFromTop){
            menu.addClass("sticky")
        }
        else {
            menu.removeClass("sticky")
        }


        //console.log(menu.position());

    });


});