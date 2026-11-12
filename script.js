let image = document.querySelector("#javaScriptImage");
let imageSrc = image.getAttribute("src");
console.log(imageSrc);

let imageChange = document.getElementById("imageChange");
let imageBtn = document.getElementById("changeImage");
imageBtn.addEventListener("click", function () {
  imageChange.src = "JavaScript.png";
});

let nameInput = document.getElementById("nameInput");
nameInput.placeholder = "Enter your name";

let disabledInput = document.getElementById("disabledInput");
let enabledBtn = document.getElementById("enableBtn");
enabledBtn.addEventListener("click", function () {
  disabledInput.removeAttribute("disabled");
});

// Select paragraph
let para = document.getElementById("myParagraph");

// Check whether paragraph has class attribute
let hasClass = para.hasAttribute("class");

// Log true or false
console.log(hasClass);

// Select the link
let myLink = document.getElementById("myLink");

// Select the button
let changeBtn = document.getElementById("changeBtn");

// Add click event
changeBtn.addEventListener("click", function () {
  // Change href attribute
  myLink.setAttribute("href", "https://www.youtube.com");

  // Change link text
  myLink.innerText = "Visit YouTube";
});
