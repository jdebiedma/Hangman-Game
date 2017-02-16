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

       $("#win-condition").html("Game Over.");

       setTimeout(function () {
             
                    location.reload();
                          
                          }, 2000);

       

        }

          if(blankSpaces.indexOf("_") === -1) {

          $("#win-condition").html("You won!");

          //wait three seconds

            setTimeout(function () {
             
                    location.reload();
                          
                          }, 2000);



        }
  



        	}

       }


      };

      





    