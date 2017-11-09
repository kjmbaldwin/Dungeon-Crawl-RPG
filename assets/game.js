// create character objects

var fighter = {
  hp    : '120',
  attack: 10,
  
}

var mage = {
  hp    : '80',
  attack: 30,
}

var theif = {
  hp    : '100',
  attack: 5,
}

var initialSelection;
var playerSelect = false;
var enemySelect = false;

var test = {name: 'kyle', age: '32'}
$('#test').data(test)
console.log( $('#test').data());



// when the object is clicked display stats
// give option to choose as character, or fight
// when choose character is slected, move to left side of board 
// when fight is selected move to right side of board

// function selectCharacter(){
// $('#fighter').on('click', function(){  
// $('#fighter').prependTo('#player')
// });
// }

// $(this).prependTo('#player')

//trying to find a way to link the opbejcts to the html elements below:

function setStats(){
  
  
  console.log( $(this.id).data('hp'));
}

$('#fighter').attr(fighter);
$('#mage').attr(mage);
$('#theif').attr(theif);

$('.character').on('click', function(){

  initialSelection = this;

  if(!playerSelect){
    $('.stats').html(
      '<h3>Class: ' + $(this).attr('id') + '</h3>' +
      '<div>HP: ' + $(this).attr('hp') + '</div>' +
      '<div>Attack: ' + $(this).attr('attack') + '</div>' 
      );
  }

  else if (playerSelect && !enemySelect) {
    $('.stats2').html(
      '<h3>Class: ' + $(this).attr('id') + '</h3>' +
      '<div>HP: ' + $(this).attr('hp') + '</div>' +
      '<div>Attack: ' + $(this).attr('attack') + '</div>' 
      );
  }


});


$('#select-char-btn').on('click', function(){
  
  if(!playerSelect){
    playerSelect = true;
    $('#player').append(initialSelection);
    
  }

  else if (playerSelect && !enemySelect){
    enemySelect = true;
    $('#enemy').append(initialSelection);
    $('.stats2').html(""); 
  }
  
});