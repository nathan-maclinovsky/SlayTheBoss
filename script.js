const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height =1024;
//const beginbutton = document.getElementById("");


const intro1 = new Image();  
intro1.src = 'pixle_art_of_a__1-transformed.png';
const cat = new Image();  
cat.src ='cat.jpeg';
let isintro = false;
function animate(){ 
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    ctx.drawImage(intro1,0,0);
    requestAnimationFrame(animate);
    isintro = true;
};
animate();


function startGame(){
    document.getElementById("beginbutton").style.display = "none";
    if(isintro == true){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    requestAnimationFrame(startGame);
    isintro = false;
    }
    else{
        animate();
    }
    
    
};

function creatingBoard(){
    const tile = new Image();
    tile.src = 'fantasyhextiles_v3.png';
    ctx.drawImage(tile,0,20,);

}



