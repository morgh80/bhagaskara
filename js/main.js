$(document).ready(function(){

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

    function moveSlides () {

        var wrapperWidth = $(".wrapper").outerWidth();
        var slider = $("#slider");
        var slides = $(".slide");

        //$(window).resize(function () {
        //    wrapperWidth = $(".wrapper").outerWidth();
        //
        //});

        var numberOfSlide = slides.length;

        var widthOfSlide = wrapperWidth;



        slides.css("width", wrapperWidth);
        slider.css("width", numberOfSlide * wrapperWidth + 5);

        var counter = 1;

        setInterval(function () {

            slider.animate({
                left: -widthOfSlide * counter
            });

            if (counter >= numberOfSlide - 1) {
                counter = 0;
            }
            else {
                counter++;
            }
        }, 3000);



};

    //Buttons skipping to next profile
    function skipButtons(){

        var profilesParent = $(".profiles");
        var profiles = profilesParent.children();
        var selectedProfile = 1;

        //Skip buttons var
        var buttonRight = $("#arrow-right");
        var buttonLeft = $("#arrow-left");

        //Chart var
        var webChart=$("#web");
        var htmlChart=$("#html");
        var designChart=$("#design");
        var uxChart=$("#ux");

        var webChartValue =  $(webChart.parent().children().children().next());
        var htmlChartValue =  $(htmlChart.parent().children().children().next());
        var designChartValue =  $(designChart.parent().children().children().next());
        var uxChartValue =  $(uxChart.parent().children().children().next());

        //Fuctions to add and remove skill classes

        function addSkillClasses() {
            webChart.addClass("percentage-" + $(profiles[selectedProfile]).data("web"));
            webChartValue.text($(profiles[selectedProfile]).data("web") + "%");
            htmlChart.addClass("percentage-" + $(profiles[selectedProfile]).data("html"));
            htmlChartValue.text($(profiles[selectedProfile]).data("html") + "%");
            designChart.addClass("percentage-" + $(profiles[selectedProfile]).data("design"));
            designChartValue.text($(profiles[selectedProfile]).data("design") + "%");
            uxChart.addClass("percentage-" + $(profiles[selectedProfile]).data("ux"));
            uxChartValue.text($(profiles[selectedProfile]).data("ux") + "%");
        };

        function removeSkillClasses() {
            webChart.removeClass("percentage-" + $(profiles[selectedProfile]).data("web"));
            htmlChart.removeClass("percentage-" + $(profiles[selectedProfile]).data("html"));
            designChart.removeClass("percentage-" + $(profiles[selectedProfile]).data("design"));
            uxChart.removeClass("percentage-" + $(profiles[selectedProfile]).data("ux"));
        };

        profiles[selectedProfile].classList.add("selectedProfile");

        addSkillClasses();

        buttonRight.on("click", function(event){
            profiles[selectedProfile].classList.remove("selectedProfile");
            profiles[selectedProfile].classList.add("profilesHideRWD");

            removeSkillClasses();
            selectedProfile++;
            if (selectedProfile >= profiles.length) {
                selectedProfile=0;
                profiles[selectedProfile].classList.add("selectedProfile");
                profiles[selectedProfile].classList.remove("profilesHideRWD");
                addSkillClasses();
            } else {
                profiles[selectedProfile].classList.add("selectedProfile");
                profiles[selectedProfile].classList.remove("profilesHideRWD");

                addSkillClasses();
            }
        });

        buttonLeft.on("click", function(event){
            profiles[selectedProfile].classList.remove("selectedProfile");
            profiles[selectedProfile].classList.add("profilesHideRWD");
            removeSkillClasses();
            selectedProfile--;
            if (selectedProfile < 0) {
                selectedProfile = (profiles.length-1);
                profiles[selectedProfile].classList.add("selectedProfile");
                profiles[selectedProfile].classList.remove("profilesHideRWD");
                addSkillClasses();
            } else {
                profiles[selectedProfile].classList.add("selectedProfile");
                profiles[selectedProfile].classList.remove("profilesHideRWD");

                addSkillClasses();
            }
        });

    };

    function showAllGallery(){

    watchAllButton =$("#watchAllButton");
    rowHidden = $("#row-hidden");

    var iteration = 0;

        rowHidden.addClass("hidden");
        watchAllButton.on("click", function(event) {

                if (iteration%2 == 0) {
                    rowHidden.removeClass("hidden");
                    watchAllButton.text("Watch less");
                }
                    else {
                        rowHidden.addClass("hidden");
                        watchAllButton.text("Watch more");
                }
                iteration++;
            });
        };

    //function filterGallery() {
    //
    //webFilter = $(".web");
    //appsFilter = $(".apps");
    //iconsFilter = $(".icons");
    //allButton=$("#allButton");
    //webButton=$("#webButton");
    //appsButton=$("#appsButton");
    //iconsButton=$("#iconsButton");
    //
    //webButton.on("click", function(event) {
    //    appsFilter.addClass("hidden");
    //    iconsFilter.addClass("hidden");
    //
    //
    //});

    function hamburger() {
        var hamburgerIcon = $("#hamburger");
        var hamburgerMenu = $(".hamburgerMenu");
        var menuItems = $(".classicMenu");
        var counter = 1;

        hamburgerIcon.on("click", function () {
        counter++;
            if (counter %2 === 0) {
            hamburgerMenu.addClass("hamburgerMenuShow");
            hamburgerMenu.removeClass("hamburgerMenuHide");
            menuItems.removeClass("classicMenu");
            } else {
                hamburgerMenu.removeClass("hamburgerMenuShow");
                hamburgerMenu.addClass("hamburgerMenuHide");
                menuItems.addClass("classicMenu");
            }

        });




    }

    //function hamburger() {
    //    var classicMenu = $(".classicMenu");
    //    var hamburgerMenu = $("#hamburerMenu");
    //    var winSize = $(window).width();
    //
    //    if (winSize < 900) {
    //        classicMenu.addClass("hidden");
    //    }

        //menu.on("click", function () {
        //    var winSize = $(window).width();
        //
        //    if (winSize < 900) {
        //        menu.children().toggle();
        //    }
        //});
    //}







    //filterGallery()
    showAllGallery();
    skipButtons();
    moveSlides();
    stickyMenu();
    hamburger();




});













