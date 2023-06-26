/**@type {HTMLCancasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height =1024;
const numberOfEnemies = 100;
const enemiesArray = [];

class Skeleton {
    constructor(){
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
    }
    update(){
       
    }
    draw(){
        ctx.drawImage(skeleton,this.x,this.y,25,50);
    }
}
const enemy1 = new Skeleton;

const mymap = new Image();
const intro1 = new Image(); 
const skeleton = new Image();
let gamestarted = true;
skeleton.src = 'Skeleton/Sprite Sheets/Skeleton Idle.png'
mymap.src = 'gamemap.png'; 
intro1.src = 'pixle_art_of_a__1-transformed.png';
const cat = new Image();  
cat.src ='cat.jpeg';

function animate(){ 
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    ctx.drawImage(intro1,0,0);
    requestAnimationFrame(animate);
    
};
animate();


function startGame(){
    document.getElementById("beginbutton").style.display = "none";
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    ctx.drawImage(mymap,0,0);
    requestAnimationFrame(startGame);
};




