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
  disableLaunchButton();
  $("#paul").css("transition", "bottom .5s ease-in-out");
  $("#paul").css("bottom", "-15rem");

  setTimeout(function () {
    randomPosition();
  }, 500);
}

function randomPosition() {
  delay = randomDelay();

  randomSide = sides[Math.floor(Math.random() * 4 - 1) + 1];
  randomTranslate = Math.floor(Math.random() * 85 - 1) + 1;
  //   randomX = Math.floor(Math.random() * 2 - 0) + 0;

  console.log("randomSide : " + randomSide);
  console.log("randomTranslate : " + randomTranslate);
  //   console.log("randomX : " + randomX);

  $("#paul").css({ top: "initial", right: "initial", bottom: "initial", left: "initial" });

  $("#paul").css("transition-property", "none");
  $("#paul").attr("src", "./assets/images/paul.png");

  switch (randomSide) {
    case "top":
      $("#paul").css("top", "-15rem");
      $("#paul").css("left", randomTranslate + "%");
      $("#paul").css("transform", "rotate(180deg)");
      setTimeout(function () {
        $("#paul").css("transition", "top .5s ease-in-out");
        $("#paul").css("top", "0rem");
        setTimeout(function () {
          $("#paul").css("top", "-15rem");
        }, 1500);
      }, 50);
      break;
    case "right":
      $("#paul").css("right", "-15rem");
      $("#paul").css("top", randomTranslate + "%");
      $("#paul").css("transform", "rotate(-90deg)");
      setTimeout(function () {
        $("#paul").css("transition", "right .5s ease-in-out");
        $("#paul").css("right", "0rem");
        setTimeout(function () {
          $("#paul").css("right", "-15rem");
        }, 1500);
      }, 50);
      break;
    case "bottom":
      $("#paul").css("bottom", "-15rem");
      $("#paul").css("left", randomTranslate + "%");
      $("#paul").css("transform", "rotate(0deg)");
      setTimeout(function () {
        $("#paul").css("transition", "bottom .5s ease-in-out");
        $("#paul").css("bottom", "0rem");
        setTimeout(function () {
          $("#paul").css("bottom", "-15rem");
        }, 1500);
      }, 50);
      break;
    case "left":
      $("#paul").css("left", "-15rem");
      $("#paul").css("top", randomTranslate + "%");
      $("#paul").css("transform", "rotate(90deg)");
      setTimeout(function () {
        $("#paul").css("transition", "left .5s ease-in-out");
        $("#paul").css("left", "0rem");
        setTimeout(function () {
          $("#paul").css("left", "-15rem");
        }, 1500);
      }, 50);
      break;
  }

  setTimeout(function () {
    randomPosition();
  }, 3000);
}

$("#paul").click(function () {
  hitsound = Math.floor(Math.random() * 5 - 1) + 1;
  $(".hitsound")[hitsound].pause();
  $(".hitsound")[hitsound].currentTime = 0;
  console.log("Hit paul !");
  $(".hitsound")[hitsound].play();
  $(this).attr("src", "./assets/images/paul-hit.png");
});

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
