let numSquares = 6;
let colors = generateRandmonColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#resetbtn");
let easyBtn =  document.querySelector("#easybtn");
let hardBtn = document.querySelector("#hardbtn");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            console.log(clickedColor, pickedColor);
            messageDisplay.textContent = "Correct";
            resetBtn.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
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
    colors = generateRandmonColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3; 
    colors = generateRandmonColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected"); 
    numSquares = 6;
    colors = generateRandmonColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})