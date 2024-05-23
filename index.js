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

$('#myBtn').click(function () {
  $('#test').empty()
  var x = $("#motherDiv")
  //    var y = $('').addClass("rules")
  //    var p = $('').addClass('paragraph')
  $("#motherDiv").append(`
   <div class= "rules" style="font-size: 35px;padding: 16px;">
  <Body style="background-image: url(https://64.media.tumblr.com/0901013c2121ffe2b48a755080bf4523/c606e4a7979684c2-78/s1280x1920/e668408582fde369ac25cfa2fbec4451d66f9673.gif); background-size: 1300px;"></Body>

      <h1  class="animate__animated animate__slideInDown" id="game-rules" style=" font-family: Seven Segment ;font-size: 50px;text-align: center;color: aliceblue;">Game Rules</h1>
      <p class = "paragraph;" style="background-color: rgb(0 0 0 / 79%);font-size: 45px; border-radius: 35px;font-family: Seven Segment ;color: #ffffff ;padding: 113px";
  > 
   
     Word Selection: Players can only use nouns (or words that can be used as nouns) in the game.<br>
      
      Word Validity: Words must be valid and not repeated.<br>
      
      Time Limit: You've 10 secs to type a word unless you lose.<br>

      Scoring: Points are typically awarded for each valid word played.<br>

      Game Over: The game ends when a player cannot come up with a valid word within the time limit, repeats a word that has already been said.
   
      
      </p>
      </div>
      <div class= "butContainer" style="text-align: center;" > <button id = "start" style=" padding: 15px 80px 15px 80px;
      font-family: Seven Segment ;
      border-radius: 28px;
  
      border-color: rgb(153, 132, 132);
      background-color: rgb(25 14 70);
      font-size: 63px;
  
      opacity: 90%;
      cursor: pointer;
      color: white;">START</button> </div>
   `)
  // $('#myParagraph').css('font-family', 'VT323, monospace');
  $("#start").click(function () {

    $("#motherDiv").hide()
    $('#game').show()
  });

})

$("#player1").animate({

});









//Game javascript class:



class Shiritori {
  constructor() {
    this.wordsAlreadySaid = [];
    this.ourArr = [];
    this.gameOver = false;
    this.highscore = +localStorage.getItem("score");
    this.currentscore1 = 0
    this.currentscore2 = 0

  }
  play(newWord, playernumb) {
    console.log(this.ourArr);
    if (!newWord) {
      return setTimeout(function () {
        // this.compareScore();
        console.log("game over : time out");
        this.restart(); alert("time is over")
      }, 1000);
    }
    if (playernumb == 1) {
      if (this.ourArr.length === 0) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        console.log("test", this.ourArr, newWord);
        this.currentscore1++
        // alert("Valid word");
        $("#b1").text("correct!!")
        $("#b1").attr("disabled", "disabled")
        $("#b1").css("background", "green")
        $("#b1").css("color", "white")

        var boxid = "#box" + playernumb
        console.log(boxid);
        $(boxid).val('')
        var scoreplayerid = "#scoreplayer" + playernumb
        $(scoreplayerid).text('score :' + this.currentscore1)


        return
      }
    }
    else if (playernumb == 2) {
      if (this.ourArr.length === 0) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        this.currentscore2++
        // alert("Valid word");
        $("#b2").text("correct!!")
        $("#b2").attr("disabled", "disabled")
        $("#b2").css("background", "green")
        $("#b2").css("color", "white")
        var boxid = "#box" + playernumb
        $(boxid).val('')
        var scoreplayerid = "#scoreplayer" + playernumb
        $(scoreplayerid).text('score :' + this.currentscore2)


        return
      }
    }



     if (this.ourArr.includes(newWord)) {
      this.gameOver = true;
      this.ourArr = [];
      this.restart();
      alert("Game Over : Invalidd word");
      var box = 'box'+playernumb
      $(box).val('');
      return
    }

    if (this.ourArr[this.ourArr.length - 1].slice(-1) !== newWord.charAt(0)) {
      this.gameOver = true;
      this.ourArr = [];
      this.restart();
      alert("Game Over : Invalid word");
      $('#box1').val('');
      return
    }

    if (playernumb == 1) {
      if (this.ourArr[this.ourArr.length - 1].slice(-1) === newWord.charAt(0)) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        this.compareScore()
        this.currentscore1++
        // alert("Valid Word");
        $("#b1").text("correct!!")
        $("#b1").attr("disabled", true)
        $("#b1").css("background", "green")
        $("#b1").css("color", "white")
        $("#b2").text("confirm")
        $("#b2").attr("disabled", false)
        $("#b2").css("background", "blue")
        $("#b2").css("color", "black")
        $('#box1').val('')
        var scoreplayerid = "#scoreplayer" + playernumb
        $(scoreplayerid).text('score :' + this.currentscore1)
        return
      }

    }
    if (playernumb == 2) {
      if (this.ourArr[this.ourArr.length - 1].slice(-1) === newWord.charAt(0)) {
        this.ourArr.push(newWord);
        this.wordsAlreadySaid.push(newWord);
        this.compareScore()
        this.currentscore2++
        // alert("Valid Word");
        $("#b2").text("correct!!")
        $("#b2").attr("disabled", true)
        $("#b2").css("background", "green")
        $("#b2").css("color", "white")
        $("#b1").text("confirm")
        $("#b1").attr("disabled", false)
        $("#b1").css("background", "red")
        $("#b1").css("color", "black")
        $('#box2').val('')
        var scoreplayerid = "#scoreplayer" + playernumb
        $(scoreplayerid).text('score :' + this.currentscore2)
        return
      }

    }
  }
  restart() {
    this.gameOver = false;
    this.ourArr = [];
    this.wordsAlreadySaid = [];
  }
  compareScore() {
    console.log(this.ourArr.length, this.highscore);
    if (this.ourArr.length > this.highscore) {
      console.log("test");
      this.highscore = this.ourArr.length;
      alert("New High Score :" + this.highscore);

      console.log("New high score: ", this.highscore);
      localStorage.setItem("score", this.ourArr.length);
      return
    }
  }
}

var game = new Shiritori()



$('#b1').click(function () {


  var input1 = $('#box1').val()
  console.log('hello');
  console.log(game.play(input1, 1))
  // $("#b1").hide()
  $("#b2").show()


});
$('#b2').click(function () {
  var input2 = $('#box2').val()
  console.log('jjjjj',game.play(input2, 2))
  $("#b1").show()
}); 