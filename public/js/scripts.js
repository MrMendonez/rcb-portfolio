// Scripts for My Portfolio

$(document).ready(function(){

  $("#down-arrow").hide().delay(3000).fadeIn(500);

  // Pulse animation on mouse hover for img links and buttons
  // DRY this code up
  $(".pulse-on-mouseenter").on("mouseenter", function() {
    $(this).toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $(this).toggleClass("animated pulse");
  });

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

  $(".pulse-on-so").on("mouseenter", function() {
    $("#so-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#so-btn").toggleClass("animated pulse");
  });

  $(".pulse-on-booked").on("mouseenter", function() {
    $("#booked-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#booked-btn").toggleClass("animated pulse");
  });

  $(".pulse-on-checked").on("mouseenter", function() {
    $("#checked-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#checked-btn").toggleClass("animated pulse");
  });

  $(".pulse-on-lwd").on("mouseenter", function() {
    $("#lwd-btn").toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $("#lwd-btn").toggleClass("animated pulse");
  });

  // Parallax Effect
  $(document).ready(function(){
    $('.parallax').parallax();
  });

  // Scrollspy Effect
  $('.scrollspy').scrollSpy();

}); // end document ready function