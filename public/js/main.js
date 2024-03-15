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

  // show/hide product cards on clicking category
  $(".products-categories button").on("click", function() {
    const category = $("#products-" + this.textContent.toLowerCase());
    const activeCategory = $(".product-cards.active");

    if (!category.hasClass("active")) {
      activeCategory.hide().removeClass("active");
      category.css("display", "flex").hide() // so display will be flex after animation
      .fadeTo(200, 1)
      .addClass("active");
    }
  })
});

// Glide
const heroGlide = new Glide("#hero-carousel", {
  type: "carousel",
  perView: 1,
  gap: 0
})
heroGlide.mount()

// Macy
const collectionsMacy = Macy({
  container: "#collections-container",
  columns: 2,
  margin: 5
});