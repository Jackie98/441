// Create object class
class Object{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

let object1 = new Object(10, 100, 150, 150, "rgb(54, 93, 8)");
let object2 = new Object(150, 30, 200, 200, "rgb(143, 111, 157)");
let object3 = new Object(80, 80, 80, 80, "rgb(238, 204, 221)");


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
var ctx3 = canvas.getContext("2d");


setInterval(update, 1000/30);
drawSquare();

function update()
{
    object2.x -= 10;
    if (object2.x <= 0 || object2.x >= 520) {
        object2.x *= -10;
    }

    object2.y -= 10;
    if (object2.y <= 0 || object2.y >= 1000) {
        object2.y *= -10;
    }

    drawSquare();
}

function update()
{
  object3.x -= 10;
  if (object3.x <= 0 || object3.x >= 520) {
      object3.x *= -10;
  }

  object3.y -= 20;
  if (object3.y <= 0 || object3.y >= 1000) {
      object3.y *= -10;
  }
  drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,500,750);
    ctx.fillStyle = object1.color;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    ctx2.fillStyle = object2.color;
    ctx2.fillRect(object2.x, object2.y, object2.width, object2.height);
    ctx3.fillStyle = object3.color;
    ctx3.fillRect(object3.x, object3.y, object3.width, object3.height);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualkey = String.fromCharCode(char);
    if(actualkey == "w")
        {
            moveUp();
        }
    else if(actualkey == "a")
        {
            moveLeft();
        }
    else if(actualkey == "d")
        {
            moveRight();
        }
    else if(actualkey == "s")
        {
            moveDown();
        }
  drawSquare();
    }

    function moveUp()
        {
            object3.y -= 80;
        }
    function moveLeft()
        {
            object3.x -= 80;
        }
    function moveRight()
        {
            object3.x += 80;
        }
    function moveDown()
        {
            object3.y += 80;
}
