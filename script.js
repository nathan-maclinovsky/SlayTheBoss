/**@type {HTMLCancasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height =1000;
const numberOfEnemies = 1;
const playerArray = [];
const demonArray = [];
const hellbeastArray = [];
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
var numFrames = 4;
const mymap = new Image();
mymap.src = 'gamemap.png'; 
const hellbeastIdle = new Image();
hellbeastIdle.src = 'hell-beast-idle.png';
const hellbeastAttack = new Image();
hellbeastAttack.src = 'hell-beast-burn.png';
var randomNum =  Math.floor(Math.random() * (100 - 30) + 30);
var randomNum2 =  Math.floor(Math.random() * (200 - 50) + 50);
const demonIdle = new Image();
demonIdle.src = 'demon-idle.png';
const demonAttack = new Image();
demonAttack.src = 'demon-attack.png';
let gameturn = 0;
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
        this.coins = 2;
        this.power = 2;
    }
     update(){
        if(gameFrame % 5 ===0 ){
        this.frame>6 ? this.frame = 0 : this.frame++;
       }
       playerX= this.x;
    playerY= this.y;

    }

    reset(){
        this.x = 405;
        this.y = 345;
    }
    draw(){
        ctx.drawImage(player,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
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

class Demon{
    constructor(){
        this.x = 430;
        this.y = 715;
        this.frame = 0;
        this.frameCount =0;
        this.spriteWidth = 160;
        this.spriteHeight= 144;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.state = demonIdle;
        this.power = 100;

    }
    update(){
        console.log(randomNum);
        if(this.state === demonIdle && this.frameCount === randomNum){
            this.frameCount = 0;
            this.state = demonAttack;

        }
        if(this.state === demonAttack && this.frameCount === 11){
            this.frameCount = 0;
            this.state = demonIdle;
            randomNum =  Math.floor(Math.random() * (100 - 30) + 30);
        }
        
        
        if(this.state === demonIdle)
            numFrames = 4;
        if(this.state === demonAttack)
            numFrames = 9;
        if(gameFrame % 5 ===0 ){
        this.frame> numFrames ? this.frame = 0 : this.frame++;
        this.frameCount++;
       
       }
     

    }
    draw(){
       if(this.state===demonIdle){ 
        ctx.drawImage(demonIdle,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
       }
       if(this.state===demonAttack){ 
        ctx.drawImage(demonAttack,this.frame * 240,0,240,192,this.x - (240-this.spriteWidth),this.y - (192-this.spriteHeight),240,192);
       }
    }
    
}

class HellBeast{
    constructor(){
        this.x = 68;
        this.y = 300;
        this.frame = 0;
        this.frameCount =0;
        this.spriteWidth = 55;
        this.spriteHeight= 67;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.state = hellbeastIdle;
        }
        update(){
            if(this.state === hellbeastIdle && this.frameCount === randomNum2){
                this.frameCount = 0;
                this.state = hellbeastAttack;
    
            }
            if(this.state === hellbeastAttack && this.frameCount === 5){
                this.frameCount = 0;
                this.state = hellbeastIdle;
                randomNum2 =  Math.floor(Math.random() * (200 - 50) + 50);
            }
            
            
            if(this.state === hellbeastIdle)
                numFrames = 3;
            if(this.state === hellbeastAttack)
                numFrames = 4;
            if(gameFrame % 5 ===0 ){
            this.frame> numFrames ? this.frame = 0 : this.frame++;
            this.frameCount++;
           
           }
         
    
        }
        draw(){
           if(this.state===hellbeastIdle){ 
            ctx.drawImage(hellbeastIdle,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
           }
           if(this.state===hellbeastAttack){ 
            ctx.drawImage(hellbeastAttack,this.frame * 74,0,74,160,this.x - (74-this.spriteWidth-13),this.y - (160-this.spriteHeight),74,160);
           }
        }     

}








for(let i = 0; i< numberOfEnemies; i++){
    playerArray.push(new Player());
    demonArray.push(new Demon());
    hellbeastArray.push(new HellBeast());
}
console.log(playerArray);


const intro1 = new Image(); 

let gamestarted = true;


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
    ctx.drawImage(mymap, 0, 0, 887, 1018);
    
    playerArray.forEach(player => {
        player.update();
        player.draw(); 
    });
    demonArray.forEach(demon => {
        demon.update();
        demon.draw(); 
    });
    hellbeastArray.forEach(hellBeast => {
        hellBeast.update();
        hellBeast.draw(); 
    });


    gameFrame++;
    document.onkeydown = function (e) {
        console.log('key down');
        console.log(e);
        playerArray.forEach(player => {
            player.move(e.key);
        });
      };
      
   // pixelData = ctx.getImageData(playerX, playerY, 1, 1).data;
  
    requestAnimationFrame(startGame);

}

function reset(){
    console.log('benbruh');
    playerArray.forEach(player => {
        player.reset();
    });

    
}






