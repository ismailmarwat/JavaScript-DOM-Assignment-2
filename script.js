// Task 1: Select by ID
const heading = document.getElementById("main-heading");
heading.textContent = "DOM Element Selected by ID";

console.log("Task 1 - heading:", heading);


// Task 2: Select by tag name
const paragraphs = document.getElementsByTagName("p");

if (paragraphs.length >= 1) {
  paragraphs[0].textContent = "First paragraph updated";
}

console.log("Task 2 - all <p> elements:", paragraphs);


// Task 3: Select by class name
const buttons = document.getElementsByClassName("btn");

if (buttons.length >= 2) {
  buttons[1].textContent = "Click Me";
}

console.log("Task 3 - all .btn elements:", buttons);


// Task 4: querySelector (first match)
const specialHeading = document.querySelector(".special-heading");
// or: document.querySelector("h3")
// or: document.querySelector("#some-id") etc.

if (specialHeading) {
  specialHeading.style.color = "blue";
}

console.log("Task 4 - selected heading with querySelector:", specialHeading);


// Task 5: querySelectorAll
const listItems = document.querySelectorAll("#fruits li");
// or: document.querySelectorAll("li")

listItems.forEach(item => {
  item.style.color = "green";
});

console.log("Task 5 - all list items:", listItems);


// Task 6: Multiple style changes
const specialPara = document.querySelector(".highlight-paragraph");

if (specialPara) {
  specialPara.style.fontSize    = "1.3rem";
  specialPara.style.color       = "darkmagenta";
  specialPara.style.backgroundColor = "#f5efff";
  specialPara.style.padding     = "12px";
  specialPara.style.borderRadius = "6px";
}

console.log("Task 6 - styled paragraph:", specialPara);
