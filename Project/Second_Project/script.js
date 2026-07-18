const btn = document.getElementById("btn")
// console.log(btn)
btn.addEventListener("click",function (event) {
          event.preventDefault();
          const height = document.getElementById("height").value
          const weight = document.getElementById("weight").value
          // console.log(height)
          // console.log(weight)
          const bmi = weight / ((height / 100) ** 2);
          const result = bmi.toFixed(2)
          console.log(result);

          // const div = document.createElement('h1')
          // console.log(div);
          // div.innerHTML = `BMI Is :- ${result}`
          // div.style.color = "white"
          // document.body.appendChild(div)

          const ans = document.getElementById("result")
          ans.append(result)
          
} )