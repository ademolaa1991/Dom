const newDiv = document.createElement('div');
const newContent = document.createTextNode("Hey, what's up?");

newDiv.appendChild(newContent);

const div = document.getElementsByClassName("text-desc")[0]; 
document.body.appendChild(newDiv);

const button = document.createElement('button');
button.innerText = "click me 4";
const buttonsDiv = document.getElementById("buttons");
buttonsDiv.appendChild(button); 