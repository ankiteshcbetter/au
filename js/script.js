$(document).ready(function() {
  if ($("file").length > 0) {
    document.getElementById("file").onchange = function() {
      let fileName = this.value;

      let fileArray = fileName.split(/[\\\/]/);

      let lastIndex = fileArray.length - 1;

      let file = fileArray[lastIndex];

      $(".form__text").html(file);
    };
  }
});

if ($(".gallery").length > 0) {
  $(document).ready(function() {
    var $container = $(".gallery .row");
    $container.isotope({
      filter: "*",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });

    $(".section-filter__container button").click(function() {
      $(".section-filter__container .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");
      console.log(selector);
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  });
}

$(function() {
  $(".burger-btn").on("click", function() {
    $(".burger-btn").toggleClass("collapse");
    $(".nav__container").toggleClass("collapse");
  });
});

// Instagram

let imageUrl = [];

function fetchImagesUrl() {
  $.ajax({
    url:
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=2198231163.fccb683.a0fb118418164deba4147c047ef4c137&count=5",
    dataType: "json",
    success: function onSuccess(response) {
      response.data.forEach(function(item) {
        imageUrl.push(item.images.standard_resolution.url);
      });
    }
  });
}

fetchImagesUrl();




$(".cta-collapse").on("click", function(event) {


  event.preventDefault();

  let e = $(this);

  $(".cta-collapse").not(e).addClass("cta-collapse--active");
  $(".cta-collapse").not(e).removeClass("cta-collapse--disable");



  $(this).toggleClass('cta-collapse--active');
  $(this).toggleClass('cta-collapse--disable');


  let parent = $(this).data("parent");

  let target = $(this).data("target");

  $(".section-project__container")
    .not(parent)
    .addClass("section-project__container--collapse");

  $(".section-project__collapse-container")
    .not(target)
    .slideUp(500);

  $(parent).toggleClass("section-project__container--collapse");

  $(target).slideToggle(500);
});


$(".button-project").on("click", function() {
  let target = $(this).data("target");
  let parent = $(this).data("parent");
  let button = $(this).data('button');


  $(button).toggleClass('cta-collapse--active');
  $(button).toggleClass('cta-collapse--disable');



  $(target).slideUp(500);

  $(parent).addClass("section-project__container--collapse");
});






$(function(){

  if($('.owl-carousel').length > 0){
    $(".owl-success").owlCarousel({
      loop: true,
      nav: false,
      items: 1
    });
    
    $(".owl-partner").owlCarousel({
      loop: true,
      nav: false,
      items: 1
    });

    $(".owl-homeGallery").owlCarousel({
      loop: true,
      nav: false,
      items: 1
    });
    
    $(".owl-gallery").owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
    
    $(".owl-testimonial").owlCarousel({
      loop: true,
      nav: false,
      items: 1
    });

    $(".owl-knowledge").owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          stagePadding:0

        },
        1000: {
          items: 2,
          stagePadding: 100
        }
      }
    });

    $(".owl-blog").owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          stagePadding:0

        },
        1000: {
          items: 2,
          stagePadding: 100
        }
      }
    });

    
  }

});


$('.button-map').on('click', function(){

  $(this).toggleClass('button-map--close');

  $('.section-map__map').slideToggle(500);


})
