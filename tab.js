let workDuration = document.getElementById("colFormLabelSm1");

let intervalInput = document.getElementById("colFormLabelSm2");
let breakDuration = document.getElementById("colFormLabelSm3");

const signUp = (event) => {
  event.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  console.log(name.value);
  if (
    name.value.length !== 0 &&
    email.value.length !== 0 &&
    password.value.length !== 0 &&
    confirmPassword.value.length !== 0
  ) {
    document.getElementById("left-img-container").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("success-modal").style.display = "block";
  }
};

workDuration.onchange = (event) => {
  document.getElementById("recommended1").style.visibility = "visible";
  document.getElementById("recommended2").style.visibility = "visible";
  document.getElementById("total").style.visibility = "visible";
  if (event.target.value < 1 || event.target.value > 24) {
    document.getElementById("error1").style.visibility = "visible";
    intervalInput.value = " ";
    breakDuration.value = " ";
    if (
      (document.getElementById("recommended1").style.visibility = "visible") ||
      (document.getElementById("recommended2").style.visibility = "visible") ||
      (document.getElementById("total").style.visibility = "visible")
    ) {
      document.getElementById("recommended1").style.visibility = "hidden";
      document.getElementById("recommended2").style.visibility = "hidden";
      document.getElementById("total").style.visibility = "hidden";
    } else {
      document.getElementById("recommended1").style.visibility = "visible";
      document.getElementById("recommended2").style.visibility = "visible";
      document.getElementById("total").style.visibility = "visible";
    }
  } else {
    if ((document.getElementById("error1").style.visibility = "visible")) {
      document.getElementById("error1").style.visibility = "hidden";
      if (event.target.value == "1") {
        intervalInput.value = 30;
        breakDuration.value = 5;
      } else {
        intervalInput.value = 60;
        breakDuration.value = 5;
      }
    }
    document.getElementById("totalFig").textContent =
      breakDuration.value * event.target.value;
  }
};

intervalInput.onchange = (event) => {
  document.getElementById("recommended1").style.visibility = "hidden";
  if (workDuration.value == "1" && event.target.value == 30) {
    document.getElementById("recommended1").style.visibility = "visible";
  } else if (event.target.value == 60) {
    document.getElementById("recommended1").style.visibility = "visible";
  } else {
    if (
      (document.getElementById("recommended1").style.visibility = "visible")
    ) {
      document.getElementById("recommended1").style.visibility = "hidden";
    }
  }
  if (event.target.value < 5 || event.target.value > 180) {
    document.getElementById("error2").style.visibility = "visible";
  } else {
    if ((document.getElementById("error2").style.visibility = "visible")) {
      document.getElementById("error2").style.visibility = "hidden";
    }
  }
};

breakDuration.onchange = (event) => {
  document.getElementById("totalFig").textContent =
    event.target.value * workDuration.value;
  if (event.target.value == 5) {
    document.getElementById("recommended2").style.visibility = "visible";
  } else {
    if (
      (document.getElementById("recommended2").style.visibility = "visible")
    ) {
      document.getElementById("recommended2").style.visibility = "hidden";
    }
  }
  if (event.target.value < 5 || event.target.value > 120) {
    document.getElementById("error3").style.visibility = "visible";
    document.getElementById("total").style.visibility = "hidden";
  } else {
    if (
      (document.getElementById("error3").style.visibility = "visible") ||
      (document.getElementById("total").style.visibility = "hidden")
    ) {
      document.getElementById("error3").style.visibility = "hidden";
      document.getElementById("total").style.visibility = "visible";
    }
  }
};

document.getElementById("save-all").onclick = (event) => {
  document.getElementById("main").style.display = "none";
  document.getElementById("countdown-modal").style.display = "flex";
};

let intialCountdown = document.getElementById("countdown");

// const timerId = setInterval(countdown, 1000);
// let timeLeft = 60;

// function countdown() {
//   if (timeLeft == -1) {
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     intialCountdown.innerHTML = timeLeft;
//     timeLeft--;
//   }
// }

// countdown(30);

const timerId = setInterval(countdown, 1000);
let timeLeft = 60;

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
  } else {
    intialCountdown.innerHTML = timeLeft;
    if (timeLeft === 30) {
      document.getElementById("pop-30").style.display = "flex";
      timeLeft--;
    } else if (timeLeft === 15) {
      document.getElementById("pop-30").style.display = "none";
      document.getElementById("pop-15").style.display = "flex";
      timeLeft--;
    } else if (timeLeft === 0) {
      document.getElementById("pop-15").style.display = "none";
      document.getElementById("timeout").style.display = "flex";
    }

    timeLeft--;
  }
}

countdown(30);

document.getElementById("reminder-x").onclick = () => {
  document.getElementById("pop-30").style.display = "none";
};
document.getElementById("reminder-x-15").onclick = () => {
  document.getElementById("pop-15").style.display = "none";
};
document.getElementById("snooze").onclick = () => {
  document.getElementById("timeout").style.display = "none";
};
