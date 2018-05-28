$(document).ready(function() {
  $("#one").click(function() {
    $("#content1").slideToggle();
      $("#content2").slideUp();
      $("#content3").slideUp();
  });
  $("#two").click(function() {
    $("#content1").slideUp();
      $("#content3").slideUp();
    $("#content2").slideDown("slow");
  });
   $("#three").click(function() {
    $("#content1").slideUp();
         $("#content2").slideUp();
    $("#content3").slideDown("slow");
  });
});
