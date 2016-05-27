$(document).ready(function() {

  var backgroundColor = '#5ed7d2'
  var turnCounter = 0
  function player(){ return turnCounter % 2 + 1 }
  function turnColor(){ if (player() === 1) { return 'red' } else { return 'black' } }
  function hoverColor(){ if (player() === 1) { return 'pink' } else { return 'grey' } }

  var rows = []
  var columns = []
  prepareMatrix(rows, columns)

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


      var row = findRow($bottomColumnSpace).slice(-1) - 1
      var column = findColumn($bottomColumnSpace).slice(-1) - 1

      if (player() === 1) {
        rows[row][column] = "R"
        columns[column][row] = "R"
      } else {
        rows[row][column] = "B"
        columns[column][row] = "B"
      }

      if (checkAllWins(rows, columns)) {
        $('.space').removeClass('empty')
        var message = "Player " + player() +" wins!\n\nClick 'Reset Board' to play again!"
        setTimeout(function(){ alert(message) }, 1000)
      }

      turnCounter += 1
    }
  })

  $('.reset').click(function(){
    clearSpaces($('.space'))
    $('table').effect( "shake", { times: 2 }, 100 )
    colorSpace($('.space'), backgroundColor)
    prepareMatrix(rows, columns)
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

function prepareMatrix(rows, columns){
  for ( i=0; i<7; i++ ) {
    var emptyRow = []
    var emptyColumn = []
    for ( j=0; j<7; j++ ) {
      emptyRow.push("_")
      emptyColumn.push("_")
    }
    rows[i] = emptyRow
    columns[i] = emptyColumn
  }
}




function checkAllWins(rows, columns){
  if ( checkWins(rows) || checkWins(columns) ) {
    return true
  }
}

function checkWins(containers){
  for ( i = 0; i < containers.length; i++ ) {
    var container = containers[i].join("")
    if (/RRRR/.test(container) || /BBBB/.test(container)) { return true }
  }
}


// function findDiagonals(diags, rows){
//   for (i=0; i<12; i++) {
//     for (j=0, l=0; j<7, l<7; j++, l++){
//       if (j + l === i) {
//         rows[i][j]
//       }
//     }
//   }
// }