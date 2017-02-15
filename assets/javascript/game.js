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

console.log("Answer = " + choice.toLowerCase());



// letterArray is the correct letters, letterList is what we guessed so far.

var letterArray = [];
var blankSpaces = [];
for (var i = 0; i < choice.length; i++) {
    letterArray.push(choice.charAt(i).toLowerCase());

}

for (var i = 0; i < (choice.length); i++) {
  
  blankSpaces.push("_");
  blankSpaces.join("");
  $("#spaces-text").html(blankSpaces);

}









      // Next, we give JavaScript a function to execute when onkeyup event fires.
     
      document.onkeyup = function(e) {

      	if (e.keyCode > 64 && e.keyCode < 91) {

      		if (keyCodeList.indexOf(e.keyCode) === -1) {

      			if (guessesLeft > 0) {

              if(letterArray.indexOf(event.key.toLowerCase()) === -1) {

            

        letterEntry.textContent = event.key;
        letterList.push(letterEntry.textContent.toLowerCase());
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
          
        if (letterArray[i] === event.key) {

            blankSpaces[i] = event.key;
            
            blankSpaces.join("");
            $("#spaces-text").html(blankSpaces);
            
        }



        }

        // $("#spaces-text").prepend(event.key);



        }

      

  }

   if (guessesLeft === 0) {
    guessesLeft = guessesLeft - 1;

       alert("Game Over. Refresh to try again.");

       

        }
  



        	}

       }


      };

      





    