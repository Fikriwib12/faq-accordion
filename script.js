const questionAnswers = document.querySelectorAll(".question-answer");

questionAnswers.forEach((qa) => {
  const btn = qa.querySelector(".btn-show-answer");
  const answer = qa.querySelector(".answer");
  const question = qa.querySelector(".question");

  const toggleAnswer = () => {
    answer.classList.toggle("show-answer");
    btn.src = answer.classList.contains("show-answer")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  };

  btn.addEventListener("click", toggleAnswer);
  question.addEventListener("click", toggleAnswer);
});
