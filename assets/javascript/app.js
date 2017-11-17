
var winAmount = 0;
var lossAmount = 0;
var correctAnswers = ["#button1","#button4", "#button5"]

setTimeout(tenSeconds, 1000 * 10);
setTimeout(fifteenSeconds, 1000 * 15);
setTimeout(twentySeconds, 1000 * 20)
setTimeout(timeUp, 1000 * 30);


function tenSeconds() {


  $("#display").text("00:15");
  console.log("15 seconds left");
}

function fifteenSeconds() {


  $("#display").text("00:10");
  console.log("10 seconds left");
}
function twentySeconds() {
  $("#display").text("00:05");
  console.log("5 seconds left");
}
function timeUp() {


  console.log("done");
  $("#display").text("Time's Up!");
  console.log("time is up");
};
// function win() {
//
//   alert("You win!");
//   winAmount++;
//
//   $("#winAmount").html(winAmount);
//   restartGame();
// }
//
// function lose() {
//
//   alert("You lose!");
//   lossAmount++;
//
//   $("#lossAmount").html(lossAmount);
//   restartGame();
// }
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);
