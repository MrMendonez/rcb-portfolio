// Scripts for My Portfolio

$(document).ready(function(){
  var carrotUp = $("<i>").addClass("fa fa-sort-asc");
  var carrotDown = $("<i>").addClass("fa fa-sort-desc");

  $(document).on("click", ".read-more", function(){
    $(".read-more").replaceWith($("<span>").addClass("read-less ").append("Read less ").append(carrotUp));
    })

  $(document).on("click", ".read-less", function(){
    $(".read-less").replaceWith($("<span>").addClass("read-more ").append("Read more ").append(carrotDown));
  })
  
});