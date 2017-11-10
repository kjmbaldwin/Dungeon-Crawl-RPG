var fighter = {
  hp      : '120',
  attack  : 10,
  counter : 0
}

var mage = {
  hp      : '80',
  attack  : 30,
  counter : 0
}

var theif = {
  hp      : '100',
  attack  : 5,
  counter : 0
}

var initialSelection;
var playerSelect = false;
var enemySelect = false;

// I was testing some stuff here, leaving it in case I need to refer back. 
// var test = {name: 'kyle', age: '32'}
// $('#test').data(test)
// console.log( $('#test').data());



// when the object is clicked display stats
// give option to choose as character, or fight
// when choose character is slected, move to left side of board 
// when fight is selected move to right side of board



//load HTML elements with objects defined above
$('#fighter').attr(fighter);
$('#mage').attr(mage);
$('#theif').attr(theif);

//start with buttons hidden hidden
$('#attack-btn').hide();
$('#select-char-btn').hide();
$('#stats-panel').hide();


//print stats in the panel when character image is clicked
$('.character').on('click', function(){

  initialSelection = this;
  $('#stats-panel').show();
  $('#select-char-btn').show();

  if(!playerSelect){
    $('.stats').html(
      '<p>Class: ' + $(this).attr('id') + '</p>' +
      '<p>Starting HP: ' + $(this).attr('hp') + '</p>' +
      '<p>Attack Power: ' + $(this).attr('attack') + '</p>' 
      );
  }

  else if (playerSelect && !enemySelect) {
    $('.stats2').html(
      '<p>Class: ' + $(this).attr('id') + '</p>' +
      '<p>Starting HP: ' + $(this).attr('hp') + '</p>' +
      '<p>Attack Power: ' + $(this).attr('attack') + '</p>' 
      );
  }

});

//move character and enemy to game board
$('#select-char-btn').on('click', function(){
  
  if(!playerSelect){
    playerSelect = true;
    $('#player').append(initialSelection);
    $('#attack-btn').show();
    $('#select-char-btn').removeClass('btn-success').addClass('btn-warning').text('Select Enemy');
  }

  else if (playerSelect && !enemySelect){
    enemySelect = true;
    $('#enemy').append(initialSelection);
    // $('.stats2').html(""); 
  }
  
});


/*
attack button sudo code
*/
