// jQuery
$(document).ready(function(){
  // show/hide burger menu
  $("#nav-burger").on("click", function() {
    // if search bar is open, close it first
    if (!$("#nav-search-bar").hasClass("hidden")) {
      $("#nav-search-bar").slideUp().addClass("hidden");
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
    // if burger menu is open, close it first
    if ($("#nav-burger").hasClass("hidden")) {
      $("#nav-links").slideUp();
      $("#nav-close").addClass("hidden");
      $("#nav-burger").removeClass("hidden");
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
    const btn = $("#category-" + this.textContent.toLowerCase());
    const activeBtn = $(".products-categories .active");

    if (!category.hasClass("active")) {
      activeCategory.hide().removeClass("active");
      activeBtn.removeClass("active");
      btn.addClass("active");
      category.css("display", "flex").hide() // so display will be flex after animation
      .fadeTo(200, 1)
      .addClass("active");
    }
  })
});

// hide/show header on scroll down/up
function scrollHeader() {
  let prevScrollPos = window.scrollY;
  const header = document.querySelector("header");
  const headerHeight = header.offsetTop + header.offsetHeight;
  
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
  
    /* if scrolling up or header hasn't been passed, show header at top */
    if (prevScrollPos > currentScrollPos || currentScrollPos < headerHeight) {
      header.style.top = "0";
    }
    /* otherwise, hide header */
    else {  
      header.style.top = `-${headerHeight}px`;
    }
    prevScrollPos = currentScrollPos;
  }
}
window.addEventListener("load", scrollHeader);
window.addEventListener("resize", scrollHeader);

// search autocomplete
const searchAutoComplete = new autoComplete({
  selector: "#search-input",
  placeHolder: "Search",
  data: {
    // suggestions list
    src: [
      "bed frame",
      "dining table",
      "sofa",
      "dresser",
      "coffee table",
      "armchair",
      "nightstand",
      "bookshelf",
      "accent chair",
      "tv stand",
      "mattress",
      "rug",
      "lamp",
      "mirror",
      "outdoor furniture",
      "office furniture",
      "decor",
      "furniture sets"
    ]
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>No results found for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  }
});

// hero img carousel
const heroGlide = new Glide("#hero-carousel", {
  type: "carousel",
  startAt: 1,
  perView: 1,
  gap: 0
})
heroGlide.mount()

// collections img layout
const collectionsMacy = Macy({
  container: "#collections-container",
  columns: 2,
  margin: 20
});