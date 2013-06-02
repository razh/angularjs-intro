(function( $ ) {
  'use strict';

  var $slides = $( '.slide' );

  $slides.each(function() {
    console.log( $( this ) );
  });

  var currSlideIndex = 0;
  var length = $slides.length;

  var isAnimating = [ true ];

  $( document ).scroll(function() {
    var slideIndex = Math.max( 0, Math.floor( window.pageYOffset / window.innerHeight ) );

    if ( slideIndex !== currSlideIndex ) {
      currSlideIndex = slideIndex;

      var prevSlideIndex = slideIndex - 1;
      if ( prevSlideIndex >= 0 ) {
        var prevSlide = $slides[ prevSlideIndex ];
      }

      var nextSlideIndex = slideIndex + 1;
      if ( nextSlideIndex < $slides.length ) {
        var nextSlide = $slides[ nextSlideIndex ];
      }
    }
  });

  var ticking = false;

  function tick() {
    if ( !ticking ) {
      window.requestAnimationFrame( update );
      ticking = true;
    }
  }

  function update() {
    isAnimating.forEach(function( element, index ) {
      if ( element ) {
        $slides[ index ];
      }
    });
  }

}) ( window.jQuery );
