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

// Glide
const heroGlide = new Glide("#hero-carousel", {
  type: "carousel",
  perView: 1,
  gap: 0
})
heroGlide.mount()