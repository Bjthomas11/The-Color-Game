// create variables for colors, number of squares and the picked color
// create variables for selectors to traverse DOM
let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#resetbtn");
let modeBtn =  document.querySelectorAll(".mode");

// call init function that holds all functions 
init();

// create function that holds all function calls
function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns(){
    // looping through mode buttons
    for(let i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            // add class to modeBtn
            this.classList.add("selected");
            // Ternary Operator (if/else) statement
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // call reset function
            reset();
        });
    }
}

function setupSquares(){
    // loop through squares
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            // create variable for color that was clicked on and use the background color 
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                console.log(clickedColor, pickedColor);
                messageDisplay.textContent = "YOU GOT IT!";
                resetBtn.textContent = "Play Again?";
                // pass in the color that was clicked on 
                changeColors(clickedColor);
                // change the h1 backgroundColor to the color the user clicked on
                h1.style.backgroundColor = clickedColor;
            } else {
                // keep background grey color
                this.style.backgroundColor = "#232323";
                // tell user to keep trying
                messageDisplay.textContent = "KEEP TRYING!";
            }
        });
    }
}

function changeColors(color){
    // loop through squares
    for(let i = 0; i < squares.length; i++){
        // set it equal to parameter that then is called above
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // round down for random 
    let random = Math.floor(Math.random() * colors.length)
    // return colors array with random variable that holds random colors
    return colors[random];
}

function generateRandomColors(num){
    // create empty array
    let array = [];
    // loop through num parameter that will be called down below
    for(let i = 0; i < num; i++){
        // add random color function to the array
        array.push(randomColor());
    }
    // return the array after the looping
    return array;
}

function randomColor(){
    // create random colors for red green and blue
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
//    return the random colors in template string
   return `rgb(${red}, ${green}, ${blue})`;
}

resetBtn.addEventListener("click", function(){
    // call reset function when reset button is clicked on
   reset();
});


function  reset(){
    // call generate random color function with numSquares variable passed into it
    colors = generateRandomColors(numSquares);
    // set picked color to the random pick color from user
    pickedColor = pickColor();
    // show the random picked color displayed
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    // loop through squares
    for (let i = 0; i < squares.length; i++){
        // if the current color index is true the display block and set background color to that color index
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            // display none if its not the right color index
            squares[i].style.display = "none";
        }
        // set h1 backgroundColor 
        h1.style.backgroundColor = "steelblue";
    }
}