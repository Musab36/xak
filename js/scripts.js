$(document).ready(function() {
  $(".fa-search").click(function(event) {
    $(".fa-search").hide();
    $(".btn").hide();
    $(".btnsr").show();
    $(".input").show();
    event.preventDefault();
  });
  $("#mor1").click(function(event) {
    $("#m1").show();
    $("#container2").show();
    $(".all").hide();
    $("#container1").hide();
    event.preventDefault();
  });
  $("#home").click(function(event) {
    $(".all").show();
    $("#m1").hide();
    $("#container1").show();
    $("#container2").hide();
    event.preventDefault();
  });
  $('#m1').submit(function(event){
  event.preventDefault();
  var post = $('.comment').val();
  $("#comment-list").append('<div> User: ' + post +  '</div>');
});
});
