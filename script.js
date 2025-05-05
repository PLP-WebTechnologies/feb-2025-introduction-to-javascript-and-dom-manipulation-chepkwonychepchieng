
// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const description = document.getElementById("description");
    description.textContent = "The text has been changed!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("toggleStyleBtn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.classList.toggle("highlight");
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById("addRemoveBtn").addEventListener("click", function () {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "dynamic-box";
      box.textContent = "I'm a new box!";
      box.style.padding = "10px";
      box.style.marginTop = "10px";
      box.style.backgroundColor = "#cceeff";
      container.appendChild(box);
    }
  });
  
