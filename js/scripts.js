// Scripts for My Portfolio

$(document).ready(function(){
  var carrotUp = $("<span>").addClass("glyphicon glyphicon-triangle-top");
  var carrotDown = $("<span>").addClass("glyphicon glyphicon-triangle-bottom");

  $(document).on("click", ".read-more", function(){
    $(this).replaceWith($("<span>").addClass("read-less").append("Read less ").append(carrotUp));
    })

  $(document).on("click", ".read-less", function(){
    $(this).replaceWith($("<span>").addClass("read-more").append("Read more ").append(carrotDown));
  })

});