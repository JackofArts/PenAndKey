$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top+1
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.woodBack').css('bottom',-(scrolled*0.1)+'px');
    $('.matBack').css('bottom',-(scrolled*0.1)+'px');
    $('.whiteBack').css('bottom',-(scrolled*0.1)+'px');
    $('.expoBack').css('bottom',-(scrolled*0.02)+'px');
    $('.xactoBack').css('bottom',-(scrolled*0.02)+'px');
    $('.penInk').css('bottom',-(scrolled*0.005)+'px');    
};

$("#side-nav-span").click( function() {
  $(".side-nav").toggle();
  if ($(".backTotal").css("opacity") === "1") {
    $(".backTotal").css("opacity",".4");
  } else {
    $(".backTotal").css("opacity","1");
  };
});

var align = window.innerWidth - 330;

$(".penInk").css("left", align + 20);
$("#side-nav-span").css("left", align + 250);
$(".side-nav").css("left", align);

$(window).load( function () {
  $("#side-nav-span").css("font-size", "7em");
  $("#side-nav-span").fadeOut(1600, function() {
    $("#side-nav-span").css("font-size", "6em");
  });
  $("#side-nav-span").fadeIn(800).fadeOut(800, function () {
    $("#side-nav-span").css("font-size", "5em");
  });
  $("#side-nav-span").fadeIn(800).fadeOut(800, function () {
    $("#side-nav-span").css("font-size", "4em");
  });
  $("#side-nav-span").fadeIn(800);
});