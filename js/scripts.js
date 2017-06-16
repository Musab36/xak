$(document).ready(function() {
  $(".fa-search").click(function(event) {
    $(".fa-search").hide();
    $(".sign").hide();
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
  $("#mor2").click(function() {
    $("#container3").fadeIn();
    $(".all").fadeOut();
    $("#container1").fadeOut();
    $("#container2").fadeOut();
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
$(".sign").click(function(event) {
   $(".fa-search").hide();
   $(".sign").hide();
   $(".btn").hide();
   $(".user").show();
   $("#userbtn").show();
   event.preventDefault();
 });
 $("#m2").submit(function(event) {
   event.preventDefault();
   var postTwo = $(".comment2").val();
   $("#comment-list2").append('<div> User: ' + postTwo + '</div>');
 });
 $(".fa-thumbs-up").click(function(event) {
   $("#down").fadeOut();
   $("#up").fadeIn();
   document.getElementById('up').innerHTML = ("You liked this story!");
   event.preventDefault();
 });
 $(".fa-thumbs-down").click(function(event) {
   $("#up").fadeOut();
   $("#down").fadeIn();
   document.getElementById('down').innerHTML = ("You disliked this story!");
   event.preventDefault();
 });
 $(".fa-thumbs-up").click(function(event) {
   $("#down").fadeOut();
   $("#up2").fadeIn();
   document.getElementById('up2').innerHTML = ("You liked this story!");
   event.preventDefault();
 });
 $(".fa-thumbs-down").click(function(event) {
   $("#up2").fadeOut();
   $("#down2").fadeIn();
   document.getElementById('down2').innerHTML = ("You disliked this story!");
   event.preventDefault();
 });

 $(".btn-info").click(function(event) {
   $(".btn-info").fadeOut();
   $(".share").fadeIn();
   event.preventDefault();
 });
});
