$(document).ready(function() {

  $(".pulse-on-mouseenter").on("mouseenter", function() {
    $(this).toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $(this).toggleClass("animated pulse");
  });

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({scrollOffset: 64});

  console.log(
    "%cHello! Welcome to Darryl's portfolio 🙂 Thanks for stopping by and have a great rest of your day!",
    `background: linear-gradient(#E66465, #9198E5);
    padding: 1rem;
    color: white;
    border-radius: .5em`
  )

});