$(document).ready(function(){
  
  // Variable
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // Toggle-Menüs-Funktion
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



  // Fullpagefunktion
  $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
          $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
      if(index == 5) {
        $('#fp-nav').show();
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
      }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    } 
  }); 
});