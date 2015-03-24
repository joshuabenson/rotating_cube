
 

$(document).ready(function(){
  $('#rotate').on('click', function(){
    console.log("hey");
    

    $('#cube').addClass('rotate');
setTimeout( function(){$('#cube').removeClass('rotate')} , 20000);
});

  });