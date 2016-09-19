// Initialize Firebase


  // var config = {
  //   apiKey: "AIzaSyAR7oyxi5Tqcbj_s0jOA6h9KBVZShVoiuQ",
  //   authDomain: "rps-bfffe.firebaseapp.com",
  //   databaseURL: "https://rps-bfffe.firebaseio.com",
  //   storageBucket: "rps-bfffe.appspot.com",
  //   messagingSenderId: "990246147235"
  // };
  
  // firebase.initializeApp(config);

  // const preObject = $('#playerName');

  // const dbRefObject = firebase.database().ref().child('object');

  // dbRefObject.on('value', snap => console.log(snap.val()));




  // var database = firebase.database();

  // var varsRef = database.ref('/vars').push();

  $(document).ready(function() {

    
    var wins1=0;
    var losses1=0;
    var wins2=0;
    var losses2=0;
    var names=['one'];
    var playerName1=names[0];
    var playerName2=names[1];
    var player1Choice;
    var player2Choice;
    // var player11Choice=[];
    // var player22Choice=[];

    function begin(){
      $('#playerId').hide();
      $('#choice').hide();
      $('#choice2').hide();
    };

    begin();

    //function below decides if the user is player 1 or 2;

    $('#start1').on('click', function(){

      $('#start').hide();
      $('#playerId').show();
      $('#choice').show();
      $('#choice2').show();
        
      if(names.length>0){
          names[1]=$('#startInput').val();
          playerName2=names[1];
      }else{
          names[0]=$('#startInput').val();
          playerName1=names[0];
        }
    })

    //code below stores each user's choice in a var;

    $('#rock').on('click', function(){
      // player1Choice='rock';
      player1Choice='rock';
      $('#choice').hide();
      whatever();
      // console.log('1: '+player1Choice);
    })

    $('#paper').on('click', function(){
      player1Choice='paper';
      $('#choice').hide();
      whatever();
      // console.log('1: '+player1Choice);
    })

    $('#scissors').on('click', function(){
      player1Choice='scissors';
      $('#choice').hide();
      whatever();
      // console.log('1: '+player1Choice);
    })

    $('#rock2').on('click', function(){
      player2Choice='rock';
      $('#choice2').hide();
      whatever();
      // console.log('2: '+player2Choice);
    })

     $('#paper2').on('click', function(){
      player2Choice='paper';
      $('#choice2').hide();
      whatever();
      // console.log('2: '+player2Choice);
    })

      $('#scissors2').on('click', function(){
      player2Choice='scissors';
      $('#choice2').hide();
      // $('#choice2').addClass('hidden');
      whatever();
      // console.log('2: '+player2Choice);
    })

function whatever(){
   


  if(player1Choice==player2Choice){
    // alert("It's a tie!");
    $('#result').text('Tie');
  }

else if (player1Choice == "rock" && player2Choice == "paper") {
  wins2=wins2+1;
  losses1=losses1+1;
  $('#wins2').text('Wins: ' + wins2);
  $('#losses').text('Losses: ' + losses1);
  $('#result').text(playerName2 + ' wins!');
  
}


else if (player1Choice == "rock" && player2Choice == "scissors") {
  wins1++;
  losses2++;
  $('#wins').text('Wins: ' + wins1);
  $('#losses2').text('Losses: ' + losses2);
  $('#result').text(playerName1 + ' wins!');

}



else if (player1Choice == "paper" && player2Choice == "rock") {
  wins1++;
  losses2++;
  $('#wins').text('Wins: ' + wins1);
  $('#losses2').text('Losses: ' + losses2);
  $('#result').text(playerName1 + ' wins!');
}

else if (player1Choice == "paper" && player2Choice == "scissors") {
  wins2++;
  losses1++;
  $('#wins2').text('Wins: ' + wins2);
  $('#losses').text('Losses: ' + losses1);
  $('#result').text(playerName2 + ' wins!');

}



else if (player1Choice == "scissors" && player2Choice == "paper") {
  wins1++;
  losses2++;
  $('#wins').text('Wins: ' + wins1);
  $('#losses2').text('Losses: ' + losses2);
  $('#result').text(playerName1 + ' wins!');
}

else if (player1Choice == "scissors" && player2Choice == "rock") {
  wins2++;
  losses1++;
  $('#wins2').text('Wins: ' + wins2);
  $('#losses').text('Losses: ' + losses1);
  $('#result').text(playerName2 + ' wins!');
}

};

 $('#reset1').on('click', function(){
      player1Choice=null;
      player2Choice=null;
      $('#choice2').show();
      $('#choice').show();
      $('#result').text('');
      // console.log('2: '+player2Choice);
    })


});









  