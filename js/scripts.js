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
    $("#btntopics").fadeIn();
    $("#container2").fadeIn();
    $(".all").hide();
    $("#container1").hide();
    event.preventDefault();
  });
  $("#mor2").click(function(event) {
    $("#btntopics").fadeIn();
    $("#container3").fadeIn();
    $(".all").fadeOut();
    $("#container1").fadeOut();
    $("#container2").fadeOut();
    event.preventDefault();
  });
  $("#mor3").click(function(event) {
    $("#btntopics").fadeIn();
    $("#container4").fadeIn();
    $(".all").fadeOut();
    $("#container1").fadeOut();
    $("#container2").fadeOut();
    $("#container3").fadeOut();
    event.preventDefault();
  });
 $("#btntopics").click(function(event) {
   $("#btntopics").fadeOut();
   $("#m1").fadeOut(2000);
   $("#container2").fadeOut();
   $("#container3").fadeOut(2000);
   $("#container4").fadeOut(2000);
   $(".all").fadeIn(2000);
   $(".bat").fadeIn(2000);
   event.preventDefault();
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
 $("#news1").click(function(event) {
   $("#btnback").fadeIn();
   $("#story1").fadeIn(3000);
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#btnback").click(function() {
   $("#btnback").fadeOut(event);
   $("#connews").fadeIn(3000);
   $("#story1").fadeOut(2000);
   $("#story2").fadeOut(2000);
   $("#story3").fadeOut(2000);
   $("#story4").fadeOut(2000);
   $("#story5").fadeOut(2000);
   $("#story6").fadeOut(2000);
   $("#story7").fadeOut(2000);
   $("#story8").fadeOut(2000);
   event.preventDefault();
 });
 $("#news2").click(function(event) {
   $("#story2").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news3").click(function(event) {
   $("#story3").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news4").click(function(event) {
   $("#story4").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news5").click(function(event) {
   $("#story5").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news6").click(function(event) {
   $("#story6").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news7").click(function(event) {
   $("#story7").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
 $("#news8").click(function(event) {
   $("#story8").fadeIn(3000);
   $("#btnback").fadeIn();
   $("#connews").fadeOut();
   event.preventDefault();
 });
});
