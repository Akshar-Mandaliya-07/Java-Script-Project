document.getElementById("btn").addEventListener("click",() => {
          // document.body.style.backgroundColor = "red"
          const letters = "0123456789ABCDEF";
          let color = "#";

          for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
          }

          // console.log(color);
          document.body.style.backgroundColor = color 
})
