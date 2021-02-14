const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

// const foodImg = new Image();
// foodImg.src = "img/food.png";
const fordImg = new Image();
fordImg.src = "img/ford.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor((Math.random() * 17 + 1)) * box,
  y: Math.floor((Math.random() * 15 + 3)) * box,
};

let ford = [];
ford[0] = {
  x: 9 * box,
  y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
  if(event.keyCode == 37 && dir != "right")
    dir = "left";
  else if(event.keyCode == 38 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function eatTail(head, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(head.x == arr[i].x && head.y == arr[i].y)
      clearInterval(game);
  }
}

function drawGame() {
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for(let i = 0; i < ford.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "red";
    ctx.fillRect(ford[i].x, ford[i].y, box, box);
  }

  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);

  let fordX = ford[0].x;
  let fordY = ford[0].y;

  if(fordX == food.x && fordY == food.y) {
    score++;
    food = {
      x: Math.floor((Math.random() * 17 + 1)) * box,
      y: Math.floor((Math.random() * 15 + 3)) * box,
    };
  } else {
    ford.pop();
  }

  if(fordX < box || fordX > box * 17
    || fordY < 3 * box || fordY > box * 17)
    clearInterval(game);

  if(dir == "left") fordX -= box;
  if(dir == "right") fordX += box;
  if(dir == "up") fordY -= box;
  if(dir == "down") fordY += box;

  let newHead = {
    x: fordX,
    y: fordY
  };

  eatTail(newHead, ford);

  ford.unshift(newHead);
}

let game = setInterval(drawGame, 100);






//
