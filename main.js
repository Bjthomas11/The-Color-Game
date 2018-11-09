let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#resetbtn");
let modeBtn =  document.querySelectorAll(".mode");

init();

function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns(){
    for(let i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3:
            numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                console.log(clickedColor, pickedColor);
                messageDisplay.textContent = "YOU GOT IT!";
                resetBtn.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "KEEP TRYING!";
            }
        });
    }
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandmonColors(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   return `rgb(${red}, ${green}, ${blue})`;
}

resetBtn.addEventListener("click", function(){
   reset();
});


function  reset(){
    colors = generateRandmonColors(numSquares);
    pickedColor = pickColor();
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        h1.style.backgroundColor = "steelblue";
    }
}