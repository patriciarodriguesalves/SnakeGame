let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let diretion = 'right';
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBg(){
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0 , 16 * box, 16 * box);
}

function createSnake(){

    for (i = 0; i < snake.length; i++) {
        
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);       
    }  
}

function drawFood(){
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y , box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && diretion != 'right') diretion = 'left';
    if(event.keyCode == 38 && diretion != 'down') diretion = 'up';
    if(event.keyCode == 39 && diretion != 'left') diretion = 'right';
    if(event.keyCode == 40 && diretion != 'up') diretion = 'down';
}

function startGame(){

    if(snake[0].x > 15 * box && diretion == 'right') snake[0].x = 0;
    if(snake[0].x < 0  && diretion == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && diretion == 'down') snake[0].y = 0;
    if(snake[0].y < 0  && diretion == 'up') snake[0].y = 16 * box;


    for (i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game over!!! :(');
        } 
    }

    createBg();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(diretion == 'right') snakeX += box;
    if(diretion == 'left') snakeX -= box;
    if(diretion == 'up') snakeY -= box;
    if(diretion == 'down') snakeY += box;

    if (snakeX!= food.x ||snakeY != food.y ){
        snake.pop();
    }
    else{
        Math.floor(Math.random() * 15 + 1) * box;
        Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
