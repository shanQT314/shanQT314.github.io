(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


$('.toggle').on('click', function() {
    $('.sidebar').toggleClass("sidebar-collapsed");
    var elem = document.getElementById("page-top");

    console.log(elem.style.paddingLeft);
    if (elem.style.paddingLeft == "0rem") {
      elem.style.paddingLeft = "15rem";
      console.log("Changing to 15rem");
    } else {
      elem.style.paddingLeft = "0rem";
      console.log("Changing to 0 rem");
    }

    


});




})(jQuery); // End of use strict
