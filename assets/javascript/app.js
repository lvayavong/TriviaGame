var winAmount = 0;
var lossAmount = 0;
var restartGame;

function stop() {
  clearTimeout(restartGame);
  $("#display").text("Stopped!");
  console.log("stopped");


};


function timer() {
  restartGame = setTimeout(tenSeconds, 1000 * 10);
  restartGame = setTimeout(fifteenSeconds, 1000 * 15);
  restartGame = setTimeout(twentySeconds, 1000 * 20)
  restartGame = setTimeout(timeUp, 1000 * 30);
}

function win() {

  alert("You win!");
  winAmount++;

  $("#winAmount").html("Win:" + winAmount);

  stop();

}

function lose() {

  alert("You lose!");
  lossAmount++;

  $("#lossAmount").html("Lose:" + lossAmount);
  stop();

}

function valid() {
  var quest1 = document.querySelector("[name='quest1']:checked").value;
  var quest2 = document.querySelector("[name='quest2']:checked").value;
  var quest3 = document.querySelector("[name='quest3']:checked").value;
  if (quest1 === "1" && quest2 === "1" && quest3 === "2") {
    win()
  } else {
    lose()
  }
}



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
