
 
var gilbert = function() {
  //
  this.$node = $('<div class = "gilcube"></div>');//element for faces to append to
  this.xpos = (Math.random() * $('.scene').width());
  this.ypos = (Math.random() * $('.scene').height());
  this.zpos = (Math.random() * 600); //TODO implement random Z on instantiation 

  this.rotateMul = (Math.random()*10); //TODO implement variable rotation speed

  this.$node.css({top: this.xpos, left: this.ypos}); 

//function creates an array of face divs to be appended to main gilcube element
  this.cubeFaces = function() {  
    var faces = ['<img src="gilberthead.png" class="cube-face cube-face-front"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-back"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-left"></img>', 
      '<img src="gilberthead.png" class="cube-face  cube-face-right"></img>',
      '<img src="gilberthead.png"class="cube-face  cube-face-top"></img>',
      '<img src="gilberthead.png" class="cube-face  cube-face-bottom"></img>'];
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

    setTimeout( function(){ $('.gilcube').removeClass('rotate').addClass('return'); 
      setTimeout( function(){ $('.gilcube').removeClass('return') } , 5000);

 }, 5000)})
  
  $('#addgilbert').on('click', function() {
    var gil = new gilbert();
  });
  $(document).on('click', '.gilcube', function() { $(this).addClass('rotate');
    setTimeout( function() { $(this).removeClass('rotate'); }, 5000);
  });
  // document.onkeydown = function(e) {
//   switch (e.keyCode) {
// // case 37:
// //   alert('left');
// //     break;
//     case 38:
//         $('.scene').animate( {top: "+=20px"} )
//         break;
// // case 39:
// //   alert('right');
// //     break;
//     case 40:
//        $('.scene').animate( {top: "-=20px"} )
//         break;
  // }
});
