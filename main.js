const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

const squares = document.querySelectorAll(".square");
const pickedColor = colors[2];
const colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        const clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("Correct");
        } else {
            alert("wrong");
        }
    });
}