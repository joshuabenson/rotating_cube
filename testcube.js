
var sceneXAngle = 0,
sceneYAngle = 0,
d = -860; 

var gilbert = function() {
  //
  this.$node = $('<div class = "gilcube"></div>');//element for faces to append to
  this.xpos = (Math.random() * 1000);
  this.ypos = (Math.random() * 1000);
  this.zpos = (Math.random() * 800); //TODO implement random Z on instantiation 

  this.rotateMul = (Math.random()*10); //TODO implement variable rotation speed

  this.$node.css({top: this.xpos, left: this.ypos/*, transform: 'translateZ(' + this.zpos + 'px)'*/}); 

//function creates an array of face divs to be appended to main gilcube element
  this.cubeFaces = function() {  
    var faces = ['<img src="gilberthead.png" class="cube-face cube-face-front"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-back"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-left"></img>', 
      '<img src="gilberthead.png" class="cube-face  cube-face-right"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-top"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-bottom"></img>'];
    var $face;
    for (var i = 0; i < faces.length; i++) {
      $face = faces[i];
// debugger;
      (this.$node).append($face);
    } 
  }
  $('#scene').append(this.$node).append(this.cubeFaces());
  // this.$node.css('transform', 'translateZ(' + this.zpos + ')');
};

var updateView = function() {
  scene.style.transform = 'translateZ( ' + d + 'px ) \
  rotateX( ' + sceneXAngle + 'deg) \
  rotateY( ' + sceneYAngle + 'deg)';
};

$(document).ready(function() {

var scene = document.getElementById( 'scene' ),
viewport = document.getElementById( 'viewport' );


  window.addEventListener( 'mousemove', function( e ) {
    sceneYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    sceneXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
    updateView();
} );

  $('#rotate').on('click', function() {

    $('.gilcube').addClass('rotate');

    setTimeout( function(){ $('.gilcube').removeClass('rotate').addClass('return'); 
      setTimeout( function(){ $('.gilcube').removeClass('return') } , 5000);

 }, 5000)})
  
  $('#addgilbert').on('click', function() {
    var gil = new gilbert();
  });
  $(document).on('click', '.gilcube', function() { $(this).addClass('rotate');
    setTimeout( function() { $(this).removeClass('rotate'); }, 5000);
  });

});
