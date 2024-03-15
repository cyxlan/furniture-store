// jQuery
$(document).ready(function(){
  // show/hide burger menu
  $("#nav-burger").on("click", function() {
    // hide search bar
    if (!$("#nav-search-bar").hasClass("hidden")) {
      $("#nav-search-bar").slideUp();
    }
    $("#nav-links").slideDown();
    $(this).toggleClass("hidden");
    $("#nav-close").toggleClass("hidden");
  });
  $("#nav-close").on("click", function() {
    $("#nav-links").slideUp();
    $(this).toggleClass("hidden");
    $("#nav-burger").toggleClass("hidden");
  });

  // show/hide search bar
  $("#nav-search").on("click", function() {
    // hide nav links
    if ($("#nav-burger").hasClass("hidden")) {
      $("#nav-links").slideUp();
      $("#nav-close").toggleClass("hidden");
      $("#nav-burger").toggleClass("hidden");
    }
    if ($("#nav-search-bar").hasClass("hidden")) {
      $("#nav-search-bar").slideDown();
    } else {
      $("#nav-search-bar").slideUp();
    }
    $("#nav-search-bar").toggleClass("hidden");
  });
});

// Glide
const heroGlide = new Glide("#hero-carousel", {
  type: "carousel",
  perView: 1,
  gap: 0
})
heroGlide.mount()