export {};
// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    const closeButton: Element = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li: HTMLElement | null = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLElement | null = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
      if (ev.target instanceof HTMLElement && ev.target.nodeName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  const inputValue: string | number | null = document.getElementById("myInput")!.textContent;
  if (inputValue == null) {
    alert("You must write something!");
  } else {
      const li: HTMLElement = document.createElement("li");
     
      const span: HTMLElement = document.createElement("SPAN");
      span.className = "close";
      li.appendChild(span);

      const t: Text = document.createTextNode(inputValue);
      span.appendChild(t);
  }

    for (let i = 0; i < close.length; i++) {
      const closeButton: Element = closeButtons[i];
      closeButton.addEventListener("click", () => {
        const li: HTMLElement | null = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
    } 
    document.getElementById("myInput")!.textContent = "";
}