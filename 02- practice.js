class Player{
  constructor(name, color){
  this.name = name;
  this.color = color;
  this.position = 0;
  this.cash = 1000;
  }
  displayInfo(){
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€, and the color is ${this.color}`)
  }
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }
  changeColor(newColor){
    this.color = newColor;
  }
};
const player1 = new Player('Thor', 'Grey');
const player2 = new Player('SuperMan','Blue');
const player3 = new Player('Batman', 'Purple');
const player4 = new Player('SpiderMan', 'Red')
const player5 = new Player('Homer Simpson', 'Yellow');
/*player1.displayInfo();
player3.displayInfo();
player1.move();
player1.changeColor('White');
player1.move();
player1.move();
player3.move();
player1.move();
player1.move();
player1.move();
player1.displayInfo();
player3.displayInfo();*/
/*function noMoney(player){
    if(this.cash > 0){
      return player.move()
    }else{
      return player.displayInfo();
    }
}*/
function noMoney(player){
  let counter = 0;
  do{
    counter += 1,
    player.move()
  }
  while(player.cash > 0)
  return counter;
}
function play(player){
   console.log({
     name: player.name,
     rounds: noMoney(player)
   })
}
play(player2);
play(player1)
play(player5)
play(player3)
play(player4)
