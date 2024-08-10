// How to copy a text by code 

let link = document.querySelector("#link");
let copyBtn = document.querySelector("#copyButton");
let textArea = document.querySelector("#area");


copyBtn.addEventListener("click", () => {
    let clipboard = document.createElement("input"); //create element 
    clipboard.value = link.innerHTML; // copy value to it 
    document.body.appendChild(clipboard);  // add to body
    clipboard.select();  // select the  text to copy it 
    document.execCommand("copy");  //copy the selected text
    document.body.removeChild(clipboard);  // hide the box 
    textArea.focus();
})

