var words = ["Mario", "Luigi", "DK", "Kirby", "Ness", "Pikachu", "Samus", "Jigglypuff", 
"Falcon", "Link", "Fox", "Yoshi"];


var choice = words[Math.floor(Math.random()*words.length)];


var numSpaces = choice.length;

var guessText = document.getElementById("guess-text") ;

var letterList = [];
var keyCodeList = [];



//  alert(choice + " " + numSpaces);

var letterEntry = document.getElementById("letter-Entry");
var guessesLeftText = document.getElementById("guesses-Left-Text");

var guessesLeft = 6;

console.log("Answer = " + choice);



// letterArray is the correct letters (in all caps), letterList is what we guessed so far.

var letterArray = [];
var blankSpaces = [];
var letterArrayProper = [];

for (var i = 0; i < choice.length; i++) {
    letterArray.push(choice.charAt(i).toLowerCase());

}

for (var i = 0; i < (choice.length); i++) {
  
  blankSpaces.push("_");
  blankSpaces.join("");
  $("#spaces-text").html(blankSpaces);

}

// letterArrayProper is the actual word with correct capitalization.

for (var i = 0; i < choice.length; i++) {
    letterArrayProper.push(choice.charAt(i));

}

  console.log(letterArrayProper);











      // Next, we give JavaScript a function to execute when onkeyup event fires.
     
      document.onkeyup = function(e) {


        if(blankSpaces.indexOf("_") != -1) {

      	if (e.keyCode > 64 && e.keyCode < 91) {

      		if (keyCodeList.indexOf(e.keyCode) === -1) {

      			if (guessesLeft > 0) {

              if(letterArray.indexOf(event.key.toLowerCase()) === -1) {

            

        letterEntry.textContent = event.key;
        letterList.push(letterEntry.textContent.toUpperCase());
        letterEntry.textContent = letterList;
        keyCodeList.push(e.keyCode);

        guessesLeft = guessesLeft - 1;
          guessesLeftText.textContent = guessesLeft;

          console.log(guessesLeft);
 
  
        }

        else {

          //what to do when they get a letter right

        console.log("correct");

        for (var i = 0; i < blankSpaces.length; i++) {
          
        if (letterArray[i] === event.key.toLowerCase() || 
          letterArray[i] === event.key.toUpperCase()) {

            blankSpaces[i] = letterArrayProper[i];
            
            blankSpaces.join("");
            $("#spaces-text").html(blankSpaces);

            
        }



        }

        // $("#spaces-text").prepend(event.key);



        }

      

      }

  }

   if (guessesLeft === 0) {
    guessesLeft = guessesLeft - 1;

       
       $("#win-condition").append("<br>" + "<br>");
       $("#answer-reminder").html("Correct answer: " + choice);
       $("#answer-reminder").fadeIn();
       $("#win-condition").fadeIn();
       $(".smash-logo").attr("src", "http://www.powerpointhintergrund.com/uploads/red-text-game-over-png-transparent-4.png");

       setTimeout(function () {
             
                    location.reload();
                          
                          }, 5000);

       

        }

          if(blankSpaces.indexOf("_") === -1) {

          $("#win-condition").html("You won!");
          $("#win-condition").fadeIn();
          $(".boxxx").css("border-color", "green")
          $(".boxxx").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

            if (choice === "Jigglypuff") {

          $(".smash-logo").attr("src", "https://media.giphy.com/media/eXUlPn1gmZavu/giphy.gif");


            }

            else if (choice === "Mario") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/atQF1zaSGq8s8/giphy.gif");

            }

            else if (choice === "Luigi") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/iMKtx7INZvQZO/giphy.gif");

            }

            else if (choice === "Pikachu") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/IfuEfxTfeorNS/giphy.gif");

            }

            else if (choice === "Samus") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/c9Mf6QdYOqc7e/source.gif");

            }

            else if (choice === "Link") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/NVBR6cLvUjV9C/giphy.gif");

            }

            else if (choice === "Kirby") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif");

            }

            else if (choice === "Falcon") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/vl2wBbQc5t4as/giphy.gif");

            }

             else if (choice === "Ness") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/S9ljg44rSGMU0/giphy.gif");

            }

            else if (choice === "Yoshi") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/mn9hjkJRSOzsY/giphy.gif");

            }

            else if (choice === "Fox") {
                $(".smash-logo").attr("src", "http://24.media.tumblr.com/8ebadc0e15453de42271271f796adb3d/tumblr_n3zkeeisHc1qbc2ylo1_500.gif");

            }

            else if (choice === "DK") {
                $(".smash-logo").attr("src", "https://media.giphy.com/media/geplAcfKGZMTS/giphy.gif");

            }
          //wait three seconds

            setTimeout(function () {
             
                    location.reload();
                          
                          }, 3500);



        }
  



        	}

       }


      };

      





    