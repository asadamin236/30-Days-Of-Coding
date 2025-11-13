let buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.style.backgroundColor = element.id;
  });
});


