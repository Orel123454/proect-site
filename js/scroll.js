var scrollTo = $('[data-scroll-to]');

      scrollTo.on('click', function () {
        var target = $($(this).data('scroll-to'));
        var offset = target.offset().top;

        $('html, body').animate({
          scrollTop: offset
        }, 2000);
      });


$(function(){

    $('.menuToggle').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});
