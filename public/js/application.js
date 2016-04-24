$(document).ready(function() {

  var turnCounter = 0

  $('.space').click(function(){

    var row = "." + $(this).attr('class').split(" ")[1]
    var column = "." + $(this).attr('class').split(" ")[2]

    for ( var i = 1; i < 8; i++) {
      if ($(column + ".row" + i).hasClass('empty')) {
        bottomRow = ".row" + i
        break
      }
    }
    var $bottomColumnSpace = $(column + bottomRow)

    if ($(this).hasClass('empty')) {
      if ( turnCounter % 2 === 0 ) {
        $bottomColumnSpace.css('background-color', 'red')
        $bottomColumnSpace.removeClass('empty')
        $bottomColumnSpace.addClass('filled')
        turnCounter += 1
      } else {
        $bottomColumnSpace.css('background-color', 'black')
        $bottomColumnSpace.removeClass('empty')
        $bottomColumnSpace.addClass('filled')
        turnCounter += 1
      }
    }

  })
});

