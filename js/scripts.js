// Scripts for My Portfolio

$(document).ready(function(){

  // Pulse animation on mouse hover for img links and buttons
  $(".pulse-on-mouseenter").on("mouseenter", function() {
    $(this).toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $(this).toggleClass("animated pulse");
  });

  // Parallax Effect
  $('.parallax').parallax();

  // Scrollspy Effect
  $('.scrollspy').scrollSpy();

  // Modal
  $('.modal-trigger').leanModal();

}); // end document ready function