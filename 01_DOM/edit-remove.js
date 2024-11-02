// Causual Approach
// Adding the elements:

function addLang(LangName) {
  const li = document.createElement("li");
  li.innerHTML = `${LangName}`;
  document.querySelector(".language").appendChild(li);
}
addLang("phython");
addLang("Ruby");
addLang("C");

// The optimised Approach
function addOptiLang(LangName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(LangName));
  document.querySelector(".language").appendChild(li);
}
addOptiLang("Go lang");

// Edit:

// 1. Approach:
const secLang = document.querySelector("li:nth-child(4)");
// secLang.innerHTML = "Mojo";

// 2. Approach:
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secLang.replaceWith(newLi);

// 3. Approach:
const newLang = document.querySelector("li:first-child");
newLang.outerHTML = "<li>Typescript</li>";

// Delete the elements:

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
