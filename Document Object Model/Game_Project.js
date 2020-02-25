var tictactoe = document.querySelectorAll("#tictactoe")
var btnRestart = document.querySelector("#b")

tictactoe.forEach(square => {
    square.addEventListener("click", changeState)
})


btnRestart.addEventListener("click", function(){
    tictactoe.forEach(element => {
        element.textContent = " "
    });
})

function changeState() {
    switch (this.textContent) {
        case " ":
            this.textContent = "X"
            break;
        case "X":
            this.textContent = "O"
            break;
        case "O":
            this.textContent = " "
    }
}


