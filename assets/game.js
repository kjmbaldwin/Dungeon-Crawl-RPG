// create character objects

var fighter = {
  role  : 'fighter',
  hp    : '120',
  attack: 10,
}

var mage = {
  role  : 'mage',
  hp    : '80',
  attack: 30,
}

var theif = {
  role  : 'theif',
  hp    : '100',
  attack: 5,
}

var selection = '';
var printStats = '';
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



$('.character').on('click', function(){
  selection = this;
  printStats = $(this).data();
  console.log(selection);
  console.log(printStats);
  console.log(printStats.hp);
  // $('.stats').text(printStats);
  // $('.stats').text(mage.attack);
  // $(this).prependTo('#player');
});


$('#select-char-btn').on('click', function(){
  $(selection).prependTo('#player');
});