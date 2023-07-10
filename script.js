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
    }
    draw(){
        ctx.drawImage(player,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
        ctx.rect(playerX+50, playerY+50, 5, 5);
        ctx.fill();
    }
    move(angle1){
        //move diagonally up
       
       
       
        if(angle1 > 0 && angle1 <45){
       // this.x+=36;
        //this.y-=21;
        playerX= this.x;
        playerY= this.y;
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


   if(pp === false){

    addEventListener("click", function(){
        if(test === true){
       
        test=false;
        }
      });
    addEventListener("mouseup", function(e){
        if(test === false){
            posX = e.clientX;
            posY = e.clientY;
            //console.log('posX'+posX);
            //console.log('posY'+posY);
           
            enemiesArray.forEach(player => {
                
                
                var myangle = angle(playerX+260,playerY-139+49,posX,posY);
                console.log(myangle);
                player.move(myangle);
                

                 });
       
        test=true;
        }
      });
    }
    gameFrame++;
    pp = false;
    requestAnimationFrame(startGame);

}


function angle(){
   

   

    const a = {
        x: posX,
        y: posY
    };
    
    const p = {
        x: playerX+260,
        y: playerY-139+49
    };
    angleDeg = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45 
    return(angleDeg);

}







