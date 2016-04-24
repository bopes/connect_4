$(document).ready(function() {
  var turnCounter = 0
  $('.space').click(function(){
    if ( turnCounter % 2 === 0 ) {
      $(this).css('background-color', 'red')
      turnCounter += 1
    } else {
      $(this).css('background-color', 'black')
      turnCounter += 1
    }
  })
});

