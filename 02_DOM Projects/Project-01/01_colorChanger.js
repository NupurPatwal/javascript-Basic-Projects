const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");
// add event listner:
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button clicked");
    console.log(e.target);

    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
