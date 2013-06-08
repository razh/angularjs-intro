(function( $, window, document, undefined ) {
  'use strict';

  var $fifthSlide = $( '#slide-04' );

  var canvas = $fifthSlide.find( '#slide-04-canvas' )[0];
  var ctx = canvas.getContext( '2d' );

  canvas.width = 0.5 * $fifthSlide[0].offsetWidth;
  canvas.height = 0.5 * $fifthSlide[0].offsetHeight;

  ctx.clearRect( 0, 0, canvas.width, canvas.height );

  var lineWidth = 10;
  var halfLineWidth = 0.5 * lineWidth;

  var halfWidth = 0.5 * canvas.width,
      halfHeight = 0.5 * canvas.height;

  var color = $( '#slide-01' ).css( 'background-color' );

  // A simple spiral line.
  ctx.moveTo( 0, halfHeight );
  ctx.quadraticCurveTo( canvas.width - halfLineWidth, halfHeight,
                        canvas.width - halfLineWidth, 0.5 * halfHeight );
  ctx.quadraticCurveTo( canvas.width - halfLineWidth, halfLineWidth,
                        0.75 * canvas.width, halfLineWidth );
  ctx.quadraticCurveTo( halfWidth, halfLineWidth,
                        halfWidth, 0.5 * halfHeight );

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

  ctx.stroke();

}) ( window.jQuery, window, document );
