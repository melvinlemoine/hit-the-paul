console.log("game.js loaded ✅");

// DATA
let sides = ["top", "right", "bottom", "left"];
let x = ["right", "left"];

// RANDOM NUMBERS
let randomSide;
let randomTranslate;
// let randomX;

// OTHER
let delay;

function launchGame() {
  console.log("▶️ launchGame");
  randomPosition();
}

function randomPosition() {
  delay = randomDelay();

  randomSide = sides[Math.floor(Math.random() * 4 - 1) + 1];
  randomTranslate = Math.floor(Math.random() * 90 - 1) + 1;
  //   randomX = Math.floor(Math.random() * 2 - 0) + 0;

  console.log("randomSide : " + randomSide);
  console.log("randomTranslate : " + randomTranslate);
  //   console.log("randomX : " + randomX);

  $("#paul").css({ top: "initial", right: "initial", bottom: "initial", left: "initial" });

  switch (randomSide) {
    case "top":
      $("#paul").css("bottom", "90%");
      $("#paul").css("transform", "rotate(180deg)");
      $("#paul").css("left", randomTranslate + "%");
      break;
    case "right":
      $("#paul").css("left", "90%");
      $("#paul").css("transform", "rotate(-90deg)");
      $("#paul").css("top", randomTranslate + "%");
      break;
    case "bottom":
      $("#paul").css("top", "90%");
      $("#paul").css("transform", "rotate(0deg)");
      $("#paul").css("left", randomTranslate + "%");
      break;
    case "left":
      $("#paul").css("right", "90%");
      $("#paul").css("transform", "rotate(90deg)");
      $("#paul").css("top", randomTranslate + "%");
      break;
  }

  setTimeout(function () {
    randomPosition();
  }, delay);
}

function randomDelay() {
  delay = Math.floor(Math.random() * 3000 - 1000) + 1000;
  console.log("Delay : " + delay);
  return delay;
}

function launchCountDown() {
  disableLaunchButton();
  $("#countdown")[0].style.display = "flex";
  $(".countdown__number--3")[0].style.display = "flex";
  let countdown__number = 3;
  let countddown_interval = setInterval(function () {
    if (countdown__number == 1) {
      console.log("0 !");
      clearInterval(countddown_interval);

      closeCountDown();
      launchGame();
    } else {
      $(".countdown__number--" + countdown__number)[0].style.display = "none";
      countdown__number--;
      $(".countdown__number--" + countdown__number)[0].style.display = "flex";
    }
  }, 1000);
}

function closeCountDown() {
  $("#countdown")[0].style.display = "none";
}

function disableLaunchButton() {
  $("#launchButton").hide();
}
function enableLaunchButton() {
  $("#launchButton").show();
}
