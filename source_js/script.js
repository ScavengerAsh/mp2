// Write any custom javascript functions here

$(document).ready(function(){
  $('.photograph').slick({
  dots: true,
  autoplay: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  
 
});


$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 2000);
  return false;
});


$(document).scroll(function () {
  
  
 
  
  var scrollPos = $(document).scrollTop() + 200;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }

  if (scrollPos > 250) {
      $('nav a').removeClass('large');
      $('nav a').addClass('small');
     
    } else {
      $('nav a').removeClass('small');	
      $('nav a').addClass('large');
     
      
     
    }

  
  });
  
    
  
});
