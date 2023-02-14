/*Event Handler */

//onclick function
function makeRed() {
  document.body.style.backgroundColor = "blue";

  //   change the heading text by clicking the button
  document.getElementById("heading").innerText = "Testing Events";
}

/*Event Listener */
// set an id
// add that id by using getElementById
// add Event Listener by using addEventListener
//set the type and an anonymous function
const myEvent = document
  .getElementById("gray-btn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "gray";
    document.getElementById("heading").innerText = "Hello Events";
  });
