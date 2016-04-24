$(document).ready(function() {

  var turnCounter = 0

  $('.space').click(function(){

    var row = $(this).attr('class').split(" ")[1]
    var column = $(this).attr('class').split(" ")[2]



    if ($(this).hasClass('empty')) {
      if ( turnCounter % 2 === 0 ) {
        $(this).css('background-color', 'red')
        $(this).removeClass('empty')
        $(this).addClass('filled')
        turnCounter += 1
      } else {
        $(this).css('background-color', 'black')
        $(this).removeClass('empty')
        $(this).addClass('filled')
        turnCounter += 1
      }
    }

  })
});

