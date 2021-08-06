$(document).ready(function() {
      var owl = $("#owl-demo");
      owl.owlCarousel({
		autoPlay : 5000,
		stopOnHover: true,
        navigation : true,
        singleItem : true,
        transitionStyle : "fade",
		 afterAction: function(el){
       //remove class active
       this
       .$owlItems
       .removeClass('active')
      
       //add class active
       this
       .$owlItems //owl internal $ object containing items
       .eq(this.currentItem + 0)
       .addClass('active')
      
     }
 });
 ////////////////////////////////////   Content slider   ///////////////////////////////////////////
  var owl = $("#owl-demo1");
     
    owl.owlCarousel({
        rewindNav : false,	
		pagination : false,        
        singleItem : true,
            afterAction: function(){
      if ( this.itemsAmount > this.visibleItems.length ) {
        $('.next').show();
        $('.prev').show();

        $('.next').removeClass('disabled');
        $('.prev').removeClass('disabled');
        if ( this.currentItem == 0 ) {
          $('.prev').addClass('disabled');
        }
        if ( this.currentItem == this.maximumItem ) {
          $('.next').addClass('disabled');
        }

      } else {
        $('.next').hide();
        $('.prev').hide();
      }
    }
    });
     
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
 
  
 });
  




$(function(){
	var quotesheight = $('.quotes').innerHeight();
	$('.quotes, .quotes2').css({'margin-top': -quotesheight / 2});	
});



$(function() {
  $('.slnav a[href*=#]:not([href=#])').click(function() {
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


$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.to-top-btn').fadeIn();
  } else {
    $('.to-top-btn').fadeOut();
  }
});
