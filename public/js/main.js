// jQuery
$(document).ready(function(){
  // show/hide burger menu
  $("#nav-burger").on("click", function() {
    $("#nav-links").slideDown();
    $("#nav-burger").hide();
    $("#nav-close").show();
  });
  $("#nav-close").on("click", function() {
    $("#nav-links").slideUp();
    $("#nav-close").hide();
    $("#nav-burger").show();
  });
}); 