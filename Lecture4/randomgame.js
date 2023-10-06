document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    var rn = Math.trunc(Math.random() * 20) + 1;
    var inputElement = document.querySelector(".numbershown");
    var buttonCheck = document.querySelector(".buttoncheck");
    var guessingNumber = document.querySelector(".guessingnumber");
    var scoreShown = document.querySelector(".scorevalue");
    var highScoreShown = document.querySelector(".highscorevalue");
    var questionMark = document.querySelector(".questionmark");
    var buttonAgain = document.querySelector(".buttonagain");
    var mainSection = document.querySelector(".mainsection");
    var mainHeading = document.querySelector(".mainheading");
    var score = 20;
    console.log("rn",rn);

    function checkNumber() {
        var inputValue = Number(inputElement.value);
        console.log("inputvalue",inputValue);
        if (rn == inputValue) {
            guessingNumber.textContent = "Hurray! Correct Guess";
            scoreShown.textContent = score;
            highScoreShown.textContent = score;
            questionMark.textContent = score;
            mainSection.style.backgroundColor = "green";
            mainHeading.textContent = "Hurray! Correct Guess.. Try Again";
        } else if (rn < inputValue) {
            score--;
            if(score<=0){
                score=0;
                scoreShown.textContent = score;
                mainHeading.textContent = "Bad Luck.. Try Again";
                mainSection.style.backgroundColor = "red";
                guessingNumber.textContent = "Lost Game";
            }
            else{
            guessingNumber.textContent = "Too high ...";
            scoreShown.textContent = score;
            }
            
        } else {
            score--
            if(score<=0){
                score=0;
                scoreShown.textContent = score;
                mainHeading.textContent = "Bad Luck.. Try Again";
                mainSection.style.backgroundColor = "red";
                guessingNumber.textContent = "Lost Game";
            }
            else{
            guessingNumber.textContent = "Too low ...";
            scoreShown.textContent = score;
            }
        }
    }
   function resetNumber(){
    score=20;
    guessingNumber.textContent = "Start guessing .....";
    scoreShown.textContent = score;
    rn = Math.trunc(Math.random() * 20) + 1;
    mainSection.style.backgroundColor = "black";
    inputElement.textContent=" ";
    console.log("rn",rn);
    mainHeading.textContent = "Guess My Number";
   }
    buttonCheck.addEventListener("click", checkNumber);
    buttonAgain.addEventListener("click", resetNumber);
});
