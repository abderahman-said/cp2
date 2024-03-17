new WOW().init();

$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    document.getElementById("page-top").scrollIntoView();

    $("#ctn-preloader").addClass("loaded");
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $(this).delay(2000).fadeOut();
    }
  }, 1500);
}

function afterLoad() {}





$(".box-video").click(function(){
  $('iframe',this)[0].src += "&amp;autoplay=1";
  $(this).addClass('open');
});





$('.owl_carousel2').owlCarousel({
  nav: true,
  dots: true,
   rtl: true,
  margin: 30,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})

$('.owl_carousel ').owlCarousel({
  nav: true,
  dots: true,
   rtl: true,
  margin: 30,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})


$('.owl_carousel1').owlCarousel({
  nav: true,
  dots: false,
   rtl: true,
  margin: 30,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})


