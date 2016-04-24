$(document).ready(function() {

  var backgroundColor = '#5ed7d2'
  var turnCounter = 0
  function turnColor(){ if (turnCounter % 2 === 0) { return 'red' } else { return 'black' } }
  function hoverColor(){ if (turnColor() === 'red') { return 'pink' } else { return 'grey' } }

  $('.space').hover(
    function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      colorSpace($bottomColumnSpace, hoverColor())
    }, function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      colorSpace($bottomColumnSpace, backgroundColor)
    })

  $('.space').click(function(){
    var $bottomColumnSpace = findBottomColumnSpace($(this))
    if ($(this).hasClass('empty')) {
      colorSpace($bottomColumnSpace, turnColor())
      $bottomColumnSpace.effect( "bounce", { times: 3 }, 500 )
      changeSpaceClass($bottomColumnSpace)
      turnCounter += 1
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

function colorSpace(space, color){
  space.css('background-color', color)
}

function changeSpaceClass(space){
  if (space.hasClass('empty')) {
    space.removeClass('empty')
    space.addClass('filled')
  } else {
    space.addClass('empty')
    space.removeClass('filled')
  }
}
