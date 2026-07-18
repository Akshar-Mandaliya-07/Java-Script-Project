let count = 0
const couner = document.getElementById("heading")
document.getElementById("inc").addEventListener("click", function () {
          count++
          couner.innerText = count
})

document.getElementById("dec").addEventListener("click", function () {
          count--
          couner.innerText = count
})

document.getElementById("res").addEventListener("click", function () {
          count = 0
          couner.innerText = count
}) 
