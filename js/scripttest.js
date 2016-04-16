$(function(){    
        $(window).scroll(function(){
            var scrollRatio = $(window).scrollTop() / $(window).height();
            $('ul').css('background-color', 'rgba(0,0,0,'+(scrollRatio)+')');
        });
  });

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}