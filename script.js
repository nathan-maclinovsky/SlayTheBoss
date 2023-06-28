/**@type {HTMLCancasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height =1024;
const numberOfEnemies = 1;
const enemiesArray = [];
const player = new Image();
const sx =0;
const scale = .5;
player.src = 'Idle.png';




let gameFrame = 0;
class Player {
    constructor(){
        this.x = 405;
        this.y = 350;
        this.frame = 0;
        this.spriteWidth = 200;
        this.spriteHeight= 200;
        
        this.width = this.spriteWidth *scale;
        this.height = this.spriteHeight*scale;
    }
    update(){
       //animate sprites
    
       if(gameFrame % 5 ===0 ){
        this.frame>6 ? this.frame = 0 : this.frame++;
       }
       

    }
    draw(){
        ctx.drawImage(player,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
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
    monkey=true;
    requestAnimationFrame(startGame);
}





