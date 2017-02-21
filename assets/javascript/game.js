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





// letterArray is the correct letters (in all caps), letterList is what we guessed so far.

var letterArray = [];
var blankSpaces = [];
var letterArrayProper = [];
var typeList = [];

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

  


 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
      "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

      for (var i = 0; i < letters.length; i++) {

      var letterBtn = $("<button>")
      .addClass("letter-button letter letter-button-color")
      .data("data-letter",  letters[i])
      .text(letters[i])
      .attr("keyCode", letters[i].charCodeAt(0))
      .appendTo("#buttons");

      

    }

     

    $(document).ready(function () {

    // Create a new jQuery event from the keyup document event.
    var keyupEvent = $.Event("keyup");
    
    /* Here we are going to create an onClick event for the button or buttons
     * that you want to target. You'll need to create the buttons in your html
     * and make sure that it has the correct attribute setup. In this case I'm
     * using a keyCode attribute but you could name it whatever you'd like.
     */
    $(".letter-button").on("click", function(e) {

        /* This will grab the keyCode attribute from the DOM element and set it
         * as the keyCode for the click event that is going to trigger the
         * keyup event.xd
        */
        keyupEvent.keyCode = $(this).attr('keyCode');


        

        // Here is where we trigger the keyupEvent that we created earlier.
        //$(this).trigger(keyupEvent);

        handleInput(keyupEvent);
        
    });

});




  /*  $(".letter-button").on("click", function(e) { 

          // $(".letter-button").text($(this).data("data-letter")
          var letterTest = $(this).data("data-letter")

          var $this = $(this),
            character = $this.html();

            

      });


*/

            
  

      


      // Next, we give JavaScript a function to execute when onkeyup event fires.
     document.onkeyup = handleInput
     function handleInput (e) {


        if(blankSpaces.indexOf("_") != -1) {

      	if (e.keyCode > 64 && e.keyCode < 91) {

      		if (keyCodeList.indexOf(parseInt(e.keyCode)) === -1) {

      			if (guessesLeft > 0) {

              if(letterArray.indexOf(String.fromCharCode(e.keyCode).toLowerCase()) === -1) {

            

        letterEntry.textContent = String.fromCharCode(e.keyCode);
        letterList.push(letterEntry.textContent.toUpperCase());
        letterEntry.textContent = letterList.join("   ");
        keyCodeList.push(parseInt(e.keyCode));

        guessesLeft = guessesLeft - 1;
          guessesLeftText.textContent = guessesLeft;

          

          
                  
  
        }

        else {

          //what to do when they get a letter right

        

        for (var i = 0; i < blankSpaces.length; i++) {
          
        if (letterArray[i] === String.fromCharCode(e.keyCode).toLowerCase() || 
          letterArray[i] === String.fromCharCode(e.keyCode).toUpperCase()) {

            blankSpaces[i] = letterArrayProper[i];
            
            blankSpaces.join("");
            $("#spaces-text").html(blankSpaces);

            

            
        }



        }

       



        }

      

      }

// EXTRA STUFF

     



      }

// EXTRA STUFF



  }





        

   if (guessesLeft === 0) {
    guessesLeft = guessesLeft - 1;

       
       $("#win-condition").append("<br>" + "<br>");
       $("#answer-reminder").html("Correct answer: " + choice);
       $("#answer-reminder").fadeIn();
       $("#win-condition").fadeIn();
       $(".smash-logo").attr("src", "http://www.powerpointhintergrund.com/uploads/red-text-game-over-png-transparent-4.png");

       var audioElement = document.createElement("audio");
          audioElement.setAttribute("src", "assets/gameover.mp3");
          audioElement.play();

       setTimeout(function () {
             
                    location.reload();
                          
                          }, 7000);

       

        }

          if(blankSpaces.indexOf("_") === -1) {

          $("#win-condition").html("You won!");
          $("#win-condition").fadeIn();
          $(".boxxx").css("border-color", "green")
          $(".boxxx").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

          var audioElement = document.createElement("audio");
          audioElement.setAttribute("src", "assets/correct.mp3");
          audioElement.play();

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
                          
                          }, 7300);



        }
  



        	}

       }


      

      





    