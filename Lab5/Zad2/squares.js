const MOVE = {
  UP: 1,
  DOWN: 2,
  RIGHT: 3,
  LEFT: 4
};

const MAXIMUM = 600;
const MINIMUM = 10;
const STEP_SIZE = 15;
const DIV_SIZE = 50;

class Square {

  constructor(x, y, color, div) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.div = div
  };

  createDiv() {
    let div = document.createElement('div');
    div.id = this.div;
    div.style.width = DIV_SIZE + "px";
    div.style.height = DIV_SIZE + "px";
    div.style.background = this.color;
    div.style.position = "absolute";
    div.style.left = this.y + "px";
    div.style.top = this.x + "px";

    document.getElementById("gameboard").appendChild(div);
  }

  move(move) {
    switch (move) {
      case MOVE.UP:
        if (this.x !== MINIMUM) {
          this.x -= STEP_SIZE;
        }
        this.createDiv();
        break;
      case MOVE.DOWN:
        if (this.x !== MAXIMUM) {
          this.x += STEP_SIZE;
        }
        this.createDiv();
        break;
      case MOVE.RIGHT:
        if (this.y !== MAXIMUM) {
          this.y += STEP_SIZE;
        }
        this.createDiv();
        break;
      case MOVE.LEFT:
        if (this.y !== MINIMUM) {
          this.y -= STEP_SIZE;
        }
        this.createDiv();
        break;
      default:
        break;
    }
  }
}

function randomMove() {
  document.getElementById(computer.div).remove();
  let move = Math.floor(Math.random() * 4 + 1);
  computer.move(move);
}

let x = Math.floor(Math.random() * 1000) % MAXIMUM
let y = Math.floor(Math.random() * 1000) % MAXIMUM
let computer = new Square(x, y, "rgb(148, 240, 116)", "computer");
let player = new Square(((x + 100) % MAXIMUM), ((y + 100) % MAXIMUM), "rgb(236, 32, 5)", "player");

computer.createDiv();
player.createDiv();

Rx.Observable.timer(0, 100).map(() => randomMove()).subscribe();

Rx.Observable.fromEvent(document, 'keydown').throttleTime(100).do
  (function() {
    let move;
    switch (event.keyCode) {
      case 38:
        move = MOVE.UP;
        break;
      case 40:
        move = MOVE.DOWN;
        break;
      case 39:
        move = MOVE.RIGHT;
        break;
      case 37:
        move = MOVE.LEFT;
        break;
      default:
        break;
    }
    if (move !== undefined && move !== null) {
      document.getElementById(player.div).remove();
      player.move(move);
    }

    if (contact(player.x, player.y) || contact(player.x, player.y + DIV_SIZE - 10) || contact(player.x + DIV_SIZE - 10, player.y) || contact(player.x + DIV_SIZE - 10, player.y + DIV_SIZE - 10)) {
      var gameboard = document.getElementById("gameboard");
      gameboard.style.display = "none";
      document.getElementById("won").innerHTML = '<span style="font-size:86px; color: rgb(255, 245, 3)">You have won!</span>';
    }

  }).subscribe();

function contact(corner_x, corner_y) {
  return corner_x > computer.x && corner_x < computer.x + DIV_SIZE && corner_y > computer.y && corner_y < computer.y + DIV_SIZE;
}
