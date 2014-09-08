jQuery(document).ready(function() {
    jQuery('a.toogleMenu').click(function(e) {
    	e.preventDefault();

        jQuery('nav').toggleClass('active');
    });

    jQuery('header>nav>a').click(function(e) {
    	e.preventDefault();

        jQuery(this).addClass('active');
        jQuery(this).siblings('a').removeClass('active');

        jQuery('body').scrollTo('#'+jQuery(this).attr('rel'), 1000);
    });

    //experience Animation
    jQuery('.experienceMenu').click(function(e){
        e.preventDefault();
        jQuery('.experience').addClass('play');
    });


    //show menu
    jQuery('a.menu').click(function(e){
        e.preventDefault();
        jQuery('header').toggleClass('activeMenu');
    });



    $(window).scroll(function (){
        var viewableOffset = $('.experience').offset().top - $(window).scrollTop();
        if( viewableOffset < 400 ){
            $('.experience').addClass('play');
            //alert(viewableOffset);
        }
    });

});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menuItems a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menuItems a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }

    });
}