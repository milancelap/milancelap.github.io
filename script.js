$(function() {
  $.scrollify({
    section : ".scroll-section",
    sectionName : "section-name",
    interstitialSection : "header-wrapper",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {
      $(".site-logo a, .main-nav a, .main-footer a").on("click",$.scrollify.move);
    }
  });
});

function updateMenuButton() {
  $('.nav-toggle, .nav-wrapper, .nav-container, .main-nav, .site-logo ').toggleClass('is-active');
}

$(document).ready(function() {

  $('.nav-toggle').click(function(e){

    e.preventDefault();
    updateMenuButton();

  });

});