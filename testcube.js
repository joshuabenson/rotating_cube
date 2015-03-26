
 
var gilbert = function() {
  //
  this.$node = $('<div class = "gilcube"></div>');
  this.xpos = (Math.random() * $('.scene').width());
  this.ypos = (Math.random() * $('.scene').height());
  this.zpos = (Math.random() * 600); //TODO implement random Z instantiation 

  this.rotateMul = (Math.random()*10); //TODO implement variable rotation speed

  this.$node.css({top: this.xpos, left: this.ypos}); //all the CSS properties might need to be dynamically assigned using jQuery

  this.cubeFaces = function() {  //function creates an array of face divs to be appended to main gilcube element
    var faces = ['<img src="gilberthead.png" class="cube-face cube-face-front"></src>',
      '<div class="cube-face  cube-face-back"></div>',
      '<div class="cube-face  cube-face-left">', 
      '<div class="cube-face  cube-face-right"></div>',
      '<div class="cube-face  cube-face-top"></div>',
      '<div class="cube-face  cube-face-bottom"></div>'];
    var $face;
    for (var i = 0; i < faces.length; i++) {
      $face = faces[i];
// debugger;
      (this.$node).append($face);
    } 
  }
  $('.scene').append(this.$node).append(this.cubeFaces());
};

$(document).ready(function() {

  $('#rotate').on('click', function() {
    $('.gilcube').addClass('rotate');
    setTimeout( function(){$('.gilcube').removeClass('rotate')} , 20000);
  });
  
  $('#addgilbert').on('click', function() {
    var gil = new gilbert();
  });
});