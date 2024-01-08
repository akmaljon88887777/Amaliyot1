import JQuery from "jquery";
JQuery(function ($) {
  var $navbar = $(".navbar");
  $(window).scroll(function (event) {
    var $current = $(this).scrollTop();
    if ($current > 0) {
      $navbar.addClass("navbar-color")
    } else {
      $navbar.removeClass("navbar-color")
    }
  })
})
JQuery(function ($) {
  var $navbar = $(".navbar2");
  $(window).scroll(function (event) {
    var $current = $(this).scrollTop();
    if ($current > 0) {
      $navbar.addClass("navbar-color2")
    } else {
      $navbar.removeClass("navbar-color2")
    }
  })
})
JQuery(function ($) {
  var $navbar = $(".navbar3");
  $(window).scroll(function (event) {
    var $current = $(this).scrollTop();
    if ($current > 0) {
      $navbar.addClass("navbar-color3")
    } else {
      $navbar.removeClass("navbar-color3")
    }
  })
})