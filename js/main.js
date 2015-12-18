$(document).ready(function(){


    //
    function stickyMenu() {
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
        });
    }

    //Slider function

    function moveSlides (){

        var wrapperWidth = $(".wrapper").outerWidth();
        var slider = $("#slider");
        var slides = $(".slide");

        var numberOfSlide = slides.length;

        var widthOfSlide = wrapperWidth;

        slides.css("width", wrapperWidth);
        slider.css("width", numberOfSlide * wrapperWidth);

        var counter = 1;

        setInterval(function(){

            slider.animate({
                left: -widthOfSlide * counter
            });

            if(counter >= numberOfSlide-1){
                counter=0;
            }
            else{
                counter++;
            }
        },3000);
    }

    //Buttons skipping to next person

    function skipButtons(){

        var buttonRight = $("#arrow-right");
        var buttonLeft = $("#arrow-left");
        var profilesParent = $(".profiles");
        var profiles = profilesParent.children();

        var selectedProfile = 1;

        profiles[selectedProfile].classList.add("selectedProfile");

           buttonRight.on("click", function(event){
                    profiles[selectedProfile].classList.remove("selectedProfile");
                    selectedProfile++;
                    if (selectedProfile >= profiles.length) {
                        selectedProfile=0;
                        profiles[selectedProfile].classList.add("selectedProfile");
                    } else {
                        profiles[selectedProfile].classList.add("selectedProfile");
                    }
            });


        buttonLeft.on("click", function(event){
            profiles[selectedProfile].classList.remove("selectedProfile");
            selectedProfile--;
            if (selectedProfile < 0) {
                selectedProfile = (profiles.length-1);
                profiles[selectedProfile].classList.add("selectedProfile");
            } else {
                profiles[selectedProfile].classList.add("selectedProfile");
            }
        });
    };



    skipButtons();




    moveSlides();
    stickyMenu();
    //console.log("bla");




});












