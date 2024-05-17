//SHIBRAH MISBAH 2024-05-16 VERSION 1

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.dropdown_menu').addClass("showCrimsonBG");
        }else{
            $('.navbar').removeClass("sticky");
            $('.dropdown_menu').removeClass("showCrimsonBG");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    }); 

    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Razored", "Styled", "Trimmed", "Rejuvenated"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Razored", "Styled", "Trimmed", "Rejuvenated"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $('.menu-btn').click(function(){        
        $('.navbar .menu').toggleClass("active");
        $('.container .banner').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.navbar .menu li a').toggleClass("active");
        $('.dropdown_menu').toggleClass("active");
        $('.navbar ul li:hover .dropdown_menu').toggleClass("active");
        $('.navbar ul .absolute').toggleClass("active");
        $('.dropdown_menu ul li').toggleClass("active");
        $('.scroll-up-btn').toggleClass("active");
        $('.navbar .dropdown_menu .last-item').toggleClass("active");
    });

});

function sendMail() {
    var link = "mailto:[email goes here]"
             + "?cc=[email goes here]"
             + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
             + "&body=" + encodeURIComponent(document.getElementById('body').value)
    ;
    
    window.location.href = link;
}