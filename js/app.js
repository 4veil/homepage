$(document).foundation();

// work hover
$('.project').mouseover(function(){
    //show the box
    $(this).children('.project-hover-text').stop().animate({opacity:1},300);
});

$('.project').mouseleave(function(){
    //hide the box
    $(this).children('.project-hover-text').stop().animate({opacity:0},300);
});