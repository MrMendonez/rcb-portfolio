// Scripts for My Portfolio

$(document).ready(function(){

  // Pulse animation on mouse hover for img links and youtube videos
  $(".pulse-on-mouseenter").on("mouseenter", function() {
    $(this).toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $(this).toggleClass("animated pulse");
  });

  // Parallax Effect
  $(document).ready(function(){
    $('.parallax').parallax();
  });

  // Scrollspy Effect
  $('.scrollspy').scrollSpy();

}); // end document ready function