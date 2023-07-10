/**@type {HTMLCancasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height =1000;
const numberOfEnemies = 1;
const enemiesArray = [];
const player = new Image();
const sx =0;
const scale = .5;
player.src = 'Idle.png';
let test = false;
let pp = true;
let playerX = 0;
let playerY = 0;
var posX = 0;
var posY = 0;




let gameFrame = 0;
class Player {
    constructor(){
        this.x = 405;
        this.y = 345;
        playerX= this.x;
        playerY= this.y;
        this.frame = 0;
        this.spriteWidth = 200;
        this.spriteHeight= 200;
        this.width = this.spriteWidth *scale;
        this.height = this.spriteHeight*scale;
    }
    update(){
        if(gameFrame % 5 ===0 ){
        this.frame>6 ? this.frame = 0 : this.frame++;
       }
       playerX= this.x;
    playerY= this.y;

    }
    draw(){
        ctx.drawImage(player,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
        //ctx.rect(playerX, playerY, 5, 5);
        //ctx.fill();
    }
    move(input){
        
        switch(input) {
            case 'e':
                //move diagonally up
                this.x+=36;
                this.y-=21;
                playerX= this.x;
                playerY= this.y;
              break;
            case 'a':
                this.x-=36;
                this.y+=21;
                playerX= this.x;
                playerY= this.y;
              break;
            case 'w':
                this.y-=42;
                playerY= this.y;
              break;
            case 's':
                this.y+=42;
                playerY= this.y;
              break;
            case 'd':
                this.x+=36;
                this.y+=21;
                playerX= this.x;
                playerY= this.y;
              break;    
            case 'q':
                this.x-=36;
                this.y-=21;
                playerX= this.x;
                playerY= this.y;
              break;    
            
          }
        
        
    }
   
  
};
for(let i = 0; i< numberOfEnemies; i++){
 enemiesArray.push(new Player());
}
console.log(enemiesArray);

const mymap = new Image();
const intro1 = new Image(); 

let gamestarted = true;

mymap.src = 'gamemap.png'; 
intro1.src = 'pixle_art_of_a__1-transformed.png';
const cat = new Image();  
cat.src ='cat.jpeg';

function animate(){ 
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    ctx.drawImage(intro1,0,0);
    requestAnimationFrame(animate);
    
}
animate();


function startGame(){
    document.getElementById("beginbutton").style.display = "none";
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    ctx.drawImage(mymap,0,0);
    enemiesArray.forEach(player => {
        player.update();
        player.draw(); 
    });
    gameFrame++;
    document.onkeydown = function (e) {
        console.log('key down');
        console.log(e);
        enemiesArray.forEach(player => {
            player.move(e.key);
        });
      };
    requestAnimationFrame(startGame);

}









