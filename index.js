"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    const closeButton = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        if (ev.target instanceof HTMLElement && ev.target.nodeName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const inputValue = document.getElementById("myInput").textContent;
    if (inputValue == null) {
        alert("You must write something!");
    }
    else {
        const li = document.createElement("li");
        const span = document.createElement("SPAN");
        span.className = "close";
        li.appendChild(span);
        const t = document.createTextNode(inputValue);
        span.appendChild(t);
    }
    for (let i = 0; i < close.length; i++) {
        const closeButton = closeButtons[i];
        closeButton.addEventListener("click", () => {
            const li = closeButton.parentElement;
            if (li) {
                li.style.display = "none";
            }
        });
    }
    document.getElementById("myInput").textContent = "";
}
