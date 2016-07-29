$(function(){    
        $(window).scroll(function(){
//            var scrollRatio = $(window).scrollTop() / $(window).height();            
            var ratio = $(window).scrollTop()/ $("#intro-div").offset().top;
            $('.topnav ul').css('background-color', 'rgba(0,0,0,'+(ratio)+')');
        });
  });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}