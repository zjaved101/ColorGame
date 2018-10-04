let numOfSquares = 6;
let colors = [];
let pickedColor;
const background = '#232323';

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');


init();

resetButton.addEventListener('click', function(){
    reset();
});


function init(){
    //mode buttons event listeners
    setupModeButtons();
    
    setupSquares();

    reset();
}

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
    
            this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
    
            reset();
        });
    };
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = 'Play Again?'
            } else{
                this.style.background = background;
                messageDisplay.textContent = 'Try Again';
            }
        });
    };
}

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr[i] = randomColor();
    }

    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = '';


    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = 'none';
    }
}

