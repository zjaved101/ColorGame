var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
        } else{
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr[i] = randomColor();
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}