$(document).ready(function() {

  var backgroundColor = '#5ed7d2'
  var turnCounter = 0
  function turnColor(){ if (turnCounter % 2 === 0) { return 'red' } else { return 'black' } }
  function hoverColor(){ if (turnColor() === 'red') { return 'pink' } else { return 'grey' } }

  $('.header').hover(
    function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      if ($bottomColumnSpace.hasClass('empty'))
        { colorSpace($bottomColumnSpace, hoverColor()) }
    }, function(){
      var $bottomColumnSpace = findBottomColumnSpace($(this))
      if ($bottomColumnSpace.hasClass('empty'))
        { colorSpace($bottomColumnSpace, backgroundColor) }
    })

  $('.header').click(function(){
    var $bottomColumnSpace = findBottomColumnSpace($(this))
    if ($bottomColumnSpace.hasClass('empty')) {
      colorSpace($bottomColumnSpace, turnColor())
      $bottomColumnSpace.effect( "bounce", { times: 3 }, 500 )
      fillSpace($bottomColumnSpace)
      turnCounter += 1
    }
  })

  $('.reset').click(function(){
    clearSpaces($('.space'))
    $('table').effect( "shake", { times: 2 }, 100 )
    colorSpace($('.space'), backgroundColor)
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

function fillSpace(space){
  if (space.hasClass('empty')) {
    space.removeClass('empty')
    space.addClass('filled')
  } else {
    space.addClass('empty')
    space.removeClass('filled')
  }
}

function clearSpaces(spaces){
  spaces.addClass('empty')
  spaces.removeClass('filled')
}
