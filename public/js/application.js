$(document).ready(function() {

  var backgroundColor = '#5ed7d2'
  var turnCounter = 0
  function turnColor(){ if (turnCounter % 2 === 0) { return 'red' } else { return 'black' } }
  function hoverColor(){ if (turnColor() === 'red') { return 'pink' } else { return 'grey' } }

  var rows = []
  for ( i=0; i<7; i++ ) {
    var emptyRow = []
    for ( i=0; i<7; i++ ) {
      emptyRow.push("_")
    }
    rows.push(emptyRow)
  }


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



      var row = findRow($bottomColumnSpace).slice(-1)
      var column = findColumn($bottomColumnSpace).slice(-1)

      console.log("Row: " + row)
      console.log("Column: " + column)

      if ( turnColor() === 'red' ) {


        rows[row - 1][column - 1] = "R"




      } else { rows[row - 1][column - 1] = "B" }

      for ( i=0; i < 7; i++){
        console.log(rows[i])
      }



      checkRowWins(rows)

      turnCounter += 1

    }
  })

  $('.reset').click(function(){
    clearSpaces($('.space'))
    $('table').effect( "shake", { times: 2 }, 100 )
    colorSpace($('.space'), backgroundColor)
  })

});

function findRow(space){
  return space.attr('class').split(" ")[1]
}

function findColumn(space){
  return space.attr('class').split(" ")[2]
}

function findBottomColumnSpace(space) {
  var row = "." + findRow(space)
  var column = "." + findColumn(space)
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

function checkAllWins(containers){
  checkRowWins(containers)
  // checkColumnWins(containers)
}

function checkRowWins(containers){
  for ( i = 0; i < containers.length; i++ ) {
    var container = containers[i].join("")
    if (/RRRR/.test(container)) { console.log("Red wins") }
      else if (/BBBB/.test(container)) { console.log("Black wins") }
  }
}