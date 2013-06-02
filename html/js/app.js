(function( $ ) {
  var $slides = $( '.slide' );

  $slides.each(function( index ) {
    console.log( $( this ) );
  });

  $( document ).scroll(function() {
    var slideIndex = Math.max( 0, Math.floor( window.pageYOffset / window.innerHeight ) );

    var currSlide = $slides[ slideIndex ];

    var prevSlideIndex = slideIndex - 1;
    if ( prevSlideIndex >= 0 ) {
      var prevSlide = $slides[ prevSlideIndex ];
    }

    var nextSlideIndex = slideIndex + 1;
    if ( nextSlideIndex < $slides.length ) {
      var nextSlide = $slides[ nextSlideIndex ];
    }
  });
}) ( window.jQuery );
