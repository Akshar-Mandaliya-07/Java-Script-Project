document.getElementById("btn").addEventListener("click",function() {

          let birth = document.getElementById("birth").value
          let current = document.getElementById("current").value    
          
          if(!birth || !current){
                    console.log("Enter Valid Date")
          }

          let birthDate = new Date(birth)
          let currentDate = new Date(current)

          let ans = currentDate.getFullYear() - birthDate.getFullYear()
          console.log(ans)

          let result = document.getElementById("result")
          result.innerText = `Ege is :- ${ans}`

})
