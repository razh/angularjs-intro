(function( $, window, document, undefined ) {
  'use strict';

  $( '.scope' ).each(function() {
    var $this = $( this );
    $this.click(function( event ) {
      $this.toggleClass( 'animated' );
      event.preventDefault();
    });
  });
}) ( window.jQuery, window, document );
