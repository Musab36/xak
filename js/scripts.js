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
    $("#m1").fadeIn();
    $("#container2").fadeIn();
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
  $("#mor3").click(function() {
    $("#container4").fadeIn();
    $(".all").fadeOut();
    $("#container1").fadeOut();
    $("#container2").fadeOut();
    $("#container3").fadeOut();
  });

  $('#m1').submit(function(event){
  event.preventDefault();
  var post = $('.comment').val();
  $("#comment-list").append('<li> ' + post +  '</li>');

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
   $("#comment-list2").append('<li> ' + postTwo + '</li>');
 });
 $("#m3").submit(function(event) {
   event.preventDefault();
   var postThree = $(".comment3").val();
   $("#comment-list3").append('<li> ' + postThree + '</li>');
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
   $("#down2").fadeOut();
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
 $(".fa-thumbs-up").click(function(event) {
   $("#down3").fadeOut();
   $("#up3").fadeIn();
   document.getElementById('up3').innerHTML = ("You liked this story!");
   event.preventDefault();
 });
 $(".fa-thumbs-down").click(function(event) {
   $("#up3").fadeOut();
   $("#down3").fadeIn();
   document.getElementById('down3').innerHTML = ("You disliked this story!");
   event.preventDefault();
 });
 $(".delete").click(function() {
   $("#comment-list").fadeOut();
   $("#comment-list2").fadeOut();
   $(".post-wells").fadeOut();

 });
 $(".form-btn").click(function() {
   $(".post-wells").fadeIn();
 });
});
