$(document).ready(function() {
  $('.js-scroll-trigger').click(function(e) {

    var targetHref = $(this).attr('href');

    $('html, body').animate({scrollTop: $(targetHref).offset().top}, 200);

    e.preventDefault();
  });
});