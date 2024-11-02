const div = document.createElement("div");
div.className = "new-para";
div.setAttribute("content", "para-content");
div.style.backgroundColor = "orange";
div.style.padding = "15px";
div.style.fontSize = "30px";
const addText = document.createTextNode("I am the new para.");
div.appendChild(addText);
document.body.appendChild(div);
