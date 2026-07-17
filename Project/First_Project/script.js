// ******************************  First Way *****************************************

// const ans1 = document.getElementById("red")
// ans1.addEventListener("click",function() {
//           document.body.style.backgroundColor = "red"
// })


// const ans2 = document.getElementById("blue")
// ans2.addEventListener("click", function () {
//           document.body.style.backgroundColor = "blue"
// })


// const ans3 = document.getElementById("yellow")
// ans3.addEventListener("click", function () {
//           document.body.style.backgroundColor = "yellow"
// })


// const ans4 = document.getElementById("green")
// ans4.addEventListener("click", function () {
//           document.body.style.backgroundColor = "green"
// })


// ********************************* Second Way **************************************

const result = document.getElementById("parent")
parent.addEventListener("click", (event) => {
          document.body.style.backgroundColor = event.target.id;
});