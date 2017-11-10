var fighter = {
  hp      : '120',
  attack  : 6,
  counter : 30
}

var mage = {
  hp      : '80',
  attack  : 15,
  counter : 20
}

var theif = {
  hp      : '100',
  attack  : 8,
  counter : 40
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
// $('#player-hp-bar').hide();
// $('#enemy-hp-bar').hide();



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
    // $('#player-hp-bar').show();
    $('#player').append(initialSelection);
    $('#select-char-btn').removeClass('btn-success').addClass('btn-warning').text('Select Enemy');
    initialSelection = null;
    initializePlayer();
  }

  else if (playerSelect && !enemySelect && initialSelection != null){
    enemySelect = true;
    $('#attack-btn').show();
    $('#enemy-hp-bar').show();
    $('#enemy').append(initialSelection);
    $('#select-char-btn').hide();
    // $('.stats2').html(""); 
    initializeEnemy();
  }
  
});

$('#attack-btn').on('click', function(){ 

  if (playerHP <= 0){
    $('.stats').text('You dead');
  }

  else{

    enemyHP = enemyHP - currentAttack;
    var barEnemy = (enemyHP / $('#enemy span').attr('hp')) * 100;
    $('#enemy-hp-bar').css('width', barEnemy+'%');
    pickNewEnemy();

    currentAttack = currentAttack * 2;
    console.log('currentAttack ' + currentAttack);

    playerHP = playerHP - enemyCounter;
    var barPlayer = (playerHP / $('#player span').attr('hp')) * 100;
     $('#player-hp-bar').css('width', barPlayer+'%');
     areYouDead();
   }

});

  var currentAttack;
  var playerHP;
  var enemyHP;
  var enemyCounter;

function initializePlayer(){
  currentAttack = $('#player span').attr('attack');
  playerHP = $('#player span').attr('hp');
  $('#player-hp-bar').css('width', '100%');
}

function initializeEnemy(){
  enemyHP = $('#enemy span').attr('hp');
  enemyCounter = $('#enemy span').attr('counter');
  $('#enemy-hp-bar').css('width', '100%');

}

function pickNewEnemy(){
  if(enemyHP <= 0){
    $('#enemy').empty();
    // $('#enemy-hp-bar').hide();
    $('.stats2').text('Defeated enemy!');
    enemySelect = false;
    $('#select-char-btn').show();
  }
}

function areYouDead(){
  if (playerHP <= 0){
    $('.stats').text('You dead');
  }


}


/*
attack button sudo code

when attack button is pressed
subtract player attack from enemy hp
attack = attack time 2 
subtract  enemy counter attack from player hp

if player hp = 0 
add message that you lose to stats

if enemy health = 0
enemySelect = flase
add defeated message to stats2


*/
