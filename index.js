var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Let's Go";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$('#myBtn').click(function(){
   $('#test').empty()
   var x = $("#motherDiv")
//    var y = $('').addClass("rules")
//    var p = $('').addClass('paragraph')
   $("#motherDiv").append(`
   <div class= "rules">
   <p class = "paragraph"> Objective: Shiritori is a Japanese word game where players take turns saying words that begin with the final kana (or character) of the previous word.

   Word Selection: Players can only use nouns (or words that can be used as nouns) in the game.
   
   Word Validity: Words must be valid and not repeated. Additionally, conjugations or particles can't be used as standalone words.
   
   Time Limit: Optionally, a time limit can be set for each turn to add pressure and excitement to the game.
   
   Game Over: The game ends when a player cannot come up with a valid word within the time limit, repeats a word that has already been said, or uses a word that ends with "n" (ん) in Japanese, as no words start with this character.

   Scoring: Points are typically awarded for each valid word played, and the player with the highest score at the end of the game wins.
   </p>
   </div>
   `)
   var b = $(` <div class= "butContainer"> <button id = "start">START</button> </div>`)
    x.append(b)

    $("#start").click(function(){
    
$("#motherDiv").hide()
$('#game').show()
});

})











//********************** */



class Shiritori {
    constructor() {
      this.wordsAlreadySaid = [];
      this.ourArr = [];
      this.gameOver = false;
      this.highscore = +localStorage.getItem("score");
    }
    play(newWord) {
      if (!newWord) {
        return setTimeout(function () {
          // this.compareScore();
          console.log("game over : time out");
          this.restart();
        }, 10000);
      }
      if (this.ourArr.length === 0) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        return "valid";
      }
      if (this.ourArr.includes(newWord)) {
        this.gameOver = true;
        this.ourArr = [];
        this.restart();
  
        return "invalid";
      }
  
      if (this.ourArr[this.ourArr.length - 1].slice(-1) !== newWord.charAt(0)) {
        this.gameOver = true;
        this.ourArr = [];
        this.restart();
        return "invalid";
      }
      if (this.ourArr[this.ourArr.length - 1].slice(-1) === newWord.charAt(0)) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        this.compareScore()
        return "valid";
      }
    }
    restart() {
      this.gameOver = false;
      this.ourArr = [];
      this.wordsAlreadySaid = [];
    }
    compareScore() {
      console.log(this.ourArr.length , this.highscore);
        if (this.ourArr.length > this.highscore) {
          console.log("test");
        this.highscore = this.ourArr.length;
        console.log("New high score: ", this.highscore);
        localStorage.setItem("score", this.ourArr.length);
      }
    }
  }

  var player1= new Shiritori()
  var player2 = new Shiritori()


$('#b1').click(function(){
    var input1=$('#box1').val()
  console.log(player1.play(input1))
}); 
$('#b2').click(function(){
    var input2=$('#box2').val()
  console.log(player2.play(input2))
}); 