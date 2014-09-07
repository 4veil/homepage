  $(document).ready(function(){

    $( '.project' ).mouseover(function() {
      $(this).children('.project-hover-text').stop().animate({opacity:1},300);
    });

    $( '.project' ).mouseleave(function() {
      $(this).children('.project-hover-text').stop().animate({opacity:0},300);
    });

    skrollr.init({forceHeight: false});

    $('.toggle-menu').jPushMenu();

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });