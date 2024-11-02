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

// The optoimised Approach
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

// Delete the elements:

const newLi = document.createElement("li")
newLi.textContent = "Mojo"
