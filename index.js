// getElementsByTagName

const tagList = document.getElementsByTagName("h1");
for (const tag of tagList) {
  tag.style.color = "red";
}

for (let i = 0; i < tagList.length; i++) {
  //   console.log(tagList[i].innerText);
}

// className
// getElementsByClassName

const classList = document.getElementsByClassName("test");
for (const value of classList) {
  value.style.backgroundColor = "steelblue";
}

// style on variable
const myHEading = document.getElementById("heading");
myHEading.style.textAlign = "center";
myHEading.style.color = "red";
// console.log(myHEading.innerText);

const elements = document.getElementById("heading-two");
elements.style.color = "red";
elements.style.backgroundColor = "blue";
elements.style.padding = "20px";
elements.style.margin = "10";

// style in one line
document.getElementById("heading").style.color = "blue";

// querySelector (To get single value)
const myElement = document.querySelector(".test");
// console.log(myElement);

// querySelectorAll (To get more value)
const myElements = document.querySelectorAll(".test");
for (const value of myElements) console.log(value);
//-----------
const lastChild = document.querySelectorAll(".li-container");
console.log(lastChild);

// Adding class
// first way
const myAllElement = document.getElementById("heading-two");
myAllElement.className = "myclass";

//second way
myAllElement.classList.add("hello");

// Removing class
myAllElement.classList.remove("my-class");

// Creating HTML element in JS
// li
const parentContainer = document.getElementById("container-details");
const newLi = document.createElement("li");
// writing something in the empty li using innerText
newLi.innerText = "Fourth";
// send the dynamic item to the parent container using appendChild
parentContainer.appendChild(newLi);

// Same way creating a div tag into a section and h1 into that div
const sectionContainer = document.getElementById("section-container");
const newDiv = document.createElement("div");
const newH1 = document.createElement("h1");
newH1.innerText = "I Explore JS Dynamically";

newDiv.appendChild(newH1);
console.log(newDiv.innerText);
sectionContainer.appendChild(newDiv);

// adding class inside the heading using setAttribute('element', 'name')
document.getElementById("att-heading").setAttribute("class", "my- class");

// To get any element or attribute, use getAttribute
const myAttribute = document.getElementById("att-heading").getAttribute("id");
