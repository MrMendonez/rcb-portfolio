// Scripts for My Portfolio

$(document).ready(function(){

  // Pulse animation on mouse hover for img links and buttons
  $(".pulse-on-db").on("mouseenter", function() {
    $("#db-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#db-btn").toggleClass("animated pulse");
  });

  $(".pulse-on-fi").on("mouseenter", function() {
    $("#fi-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#fi-btn").toggleClass("animated pulse");
  });

  // Parallax Effect
  $(document).ready(function(){
    $('.parallax').parallax();
  });

  // Scrollspy Effect
  $('.scrollspy').scrollSpy();

}); // end document ready function