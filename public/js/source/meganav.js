(function($) {
  $(function() {
    $('.meganav-strip .toggle-meganav-overlay').click(function() {
      $(this).fadeOut(300, function(){
        $('.meganav-overlay').addClass('open');
      })
    });

    $('.meganav-overlay .toggle-meganav-overlay').click(function() {
      $('.meganav-overlay').removeClass('open');
      $('.meganav-strip .toggle-meganav-overlay').fadeIn(300);
    });

    var pageName = $("body").data("page");
    $(".meganav-overlay div a."+pageName).addClass("active");


    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        if (ScrollTop > 100) {
            $(".meganav-strip").addClass("scrolled");
          } else {            
            $(".meganav-strip").removeClass("scrolled");
        }
    });




  });
})(jQuery);