document.getElementById("btn").addEventListener("click",function(event) {
          // event.stopPropagation()
          const result = document.getElementById("password").value
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          const ans = document.getElementById("result")
          if(pattern.test(result)){
                    ans.innerHTML = "Valid Password"
                    ans.style.color = "Green"
          }
          else{
                    // console.log("Invalid Password");
                    ans.innerText = "Invalid Password"
                    ans.style.color = "red"
          }
})
