$(document).ready(function() {

  var turnCounter = 0

  $('.space').hover(
    function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      $bottomColumnSpace.css('background-color', 'white')
    }, function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      $bottomColumnSpace.css('background-color', '#5ed7d2')
    })


  $('.space').click(function(){
    var $bottomColumnSpace = findBottomColumnSpace($(this))
    if ($(this).hasClass('empty')) {
      if ( turnCounter % 2 === 0 ) {
        $bottomColumnSpace.css('background-color', 'red')
        $bottomColumnSpace.effect( "bounce", { times: 3 }, 500 )
        $bottomColumnSpace.removeClass('empty')
        $bottomColumnSpace.addClass('filled')
        turnCounter += 1
      } else {
        $bottomColumnSpace.css('background-color', 'black')
        $bottomColumnSpace.effect( "bounce", { times: 3 }, 500 )
        $bottomColumnSpace.removeClass('empty')
        $bottomColumnSpace.addClass('filled')
        turnCounter += 1
      }
    }

  })

  $('.reset').click(function(){
    $('.space').removeClass('filled')
    $('.space').addClass('empty')
    $('table').effect( "shake", { times: 2 }, 100 )
    $('.space').css('background-color', '#5ed7d2')

  })

});


function findBottomColumnSpace(space) {
  var row = "." + space.attr('class').split(" ")[1]
  var column = "." + space.attr('class').split(" ")[2]
  for ( var i = 1; i < 8; i++) {
    if ($(column + ".row" + i).hasClass('empty')) {
      bottomRow = ".row" + i
      break
    }
  }
  return $(column + bottomRow)
}

