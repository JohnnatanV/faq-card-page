const items = document.querySelectorAll(".faq__item");

const selection = () => {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.childNodes[1].childNodes[1].classList.add("select");
      item.childNodes[1].childNodes[3].childNodes[1].classList.add("push");
      // question.classList.add("select");
      // e.target.nextElementSibling.childNodes[1].classList.add("push");
      // e.target.parentNode.parentNode.childNodes[3].classList.remove("pull");
    });
  });
};

selection();
