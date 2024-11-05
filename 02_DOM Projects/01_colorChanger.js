// select all the elements aka btns:

const btns = document.querySelectorAll(".button");
console.log(btns);

// select the body:
const body = document.querySelector("body");

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("button is clicked.");
    console.log(event.target);
    if ((event.target.id )) {
      body.style.backgroundColor = event.target.id;
    }
  });
});
