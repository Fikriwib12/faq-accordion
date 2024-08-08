const btnShowAnswers = document.querySelectorAll(".btn-show-answer");
const answers = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
question.forEach((qst, index) => {
  qst.onclick = function () {
    answers[index].classList.toggle("show-answer");
    if (answers[index].classList.contains("show-answer")) {
      btn.src = "assets/images/icon-minus.svg";
    } else {
      btn.src = "assets/images/icon-plus.svg";
    }
  };
});

btnShowAnswers.forEach((btn, index) => {
  btn.onclick = function () {
    answers[index].classList.toggle("show-answer");
    if (answers[index].classList.contains("show-answer")) {
      btn.src = "assets/images/icon-minus.svg";
    } else {
      btn.src = "assets/images/icon-plus.svg";
    }
  };
});
