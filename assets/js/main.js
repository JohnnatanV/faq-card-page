const questions = document.querySelectorAll(".question"),
  answerBoxes = document.querySelectorAll(".answer__box");

const selection = () => {
  questions.forEach((question) => {
    question.addEventListener("click", (e) => {
      console.log(e.target.parentNode);
      // question.classList.add("select");
      // e.target.nextElementSibling.childNodes[1].classList.add("push");
      // e.target.parentNode.parentNode.childNodes[3].classList.remove("pull");
    });
  });
};

selection();
