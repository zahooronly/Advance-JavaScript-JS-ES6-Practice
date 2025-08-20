const body = document.body;

const div = document.createElement("div");
const p = document.createElement("p");
const btn = document.createElement("button");
// body.style.margin = 0;
// body.style.padding = 0;
body.append(div);
div.append(p,btn);
// div.append(btn);
p.textContent = "Hello";

div.style.backgroundColor = "green";
p.style.color = "dodgerblue";
div.style.padding = "8px";
p.style.fontSize = "50px";
div.style.borderRadius = "8px";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
// div.style.webkitTextStrokeWidth = "1px";
// div.style.webkitTextStrokeColor = "black";

btn.textContent = "Click Me";
btn.style.maxWidth = "100px";
btn.style.width = "100%";
btn.style.padding = "4px";
btn.style.borderRadius = "4px";
btn.style.border = "none";

function changeColor() {
  p.style.backgroundColor = "white";
  p.style.color = "pink";
}

btn.addEventListener("click", changeColor);
