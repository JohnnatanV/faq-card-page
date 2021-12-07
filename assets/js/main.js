let questions = document.getElementsByClassName("question");

let activate = () => {
  for (let item of questions) {
    item.addEventListener("click", () => {
      item.children[0].classList.toggle("active-text");
      item.children[1].classList.toggle("active-arrow");
      item.nextElementSibling.classList.toggle("acordion");
    });
  }
};

activate();
