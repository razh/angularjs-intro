(function( $ ) {
  'use strict';

  var $slides = $( '.slide' );

  var prevSlideIndex = 0,
      currSlideIndex = 0,
      nextSlideIndex = 0;

  var prevSlide = $slides[ prevSlideIndex ],
      currSlide = $slides[ currSlideIndex ],
      nextSlide = $slides[ nextSlideIndex ];

  $( document ).scroll(function() {
    var slideIndex = Math.max( 0, Math.floor( window.pageYOffset / window.innerHeight ) );

    if ( slideIndex !== currSlideIndex ) {
      // Pause slides that are no longer visible.
      if ( slideIndex < currSlideIndex ) {
        pause( $( nextSlide ) );
      } else {
        pause( $( prevSlide ) );
      }

      currSlideIndex = slideIndex;
      currSlide = $slides[ currSlideIndex ];

      prevSlideIndex = slideIndex - 1;
      if ( prevSlideIndex >= 0 ) {
        prevSlide = $slides[ prevSlideIndex ];
        play( $( prevSlide ) );
      }

      nextSlideIndex = slideIndex + 1;
      if ( nextSlideIndex < $slides.length ) {
        nextSlide = $slides[ nextSlideIndex ];
        play( $( nextSlide ) );
      }
    }
  });

  function setAnimationState( $element, state ) {
    $element.css({
      '-webkit-animation-play-state': state,
      'animation-play-state': state
    });
  }

  function play( $element ) {
    setAnimationState( $element, 'running' );
  }

  function pause( $element ) {
    setAnimationState( $element, 'paused' );
  }

}) ( window.jQuery );
