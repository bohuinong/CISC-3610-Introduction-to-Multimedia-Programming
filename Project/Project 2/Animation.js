document.addEventListener("DOMContentLoaded", function(){

    // avatar setup
    let avatar = new Image();
    avatar.src = "./Green-Cap-Character-16x18.png";
    avatar.onload = function () {
      init();
    };

    //background setup
    let bg = new Image();
    bg.src = "background.jpg";
    let isDisplayed = false;

    //tv setup
    let tv = new Image();
    tv.src = "tv.png";
    let tvPosx = 242;
    let tvPosy = 178;

    //frame setup
    const scale = 2;
    const width = 16;
    const height = 18;
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;
    let avatarPosx = 0;
    let avatarPosy = 345;

    //animation setup
    const walkAnimLoop = [0, 1, 0, 2];
    let currWalkAnimIndex = 0;
    const frameRate = 15;
    let frameCount = 0;
    let currDirection = 0;
    let isKeyDown = false;
    let speed = 5;

    //canvas setup
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    //dialogue setup
    let index = 1;
    let dialogueTimeCount = 0;
    let dialogueTimeRate = 50;
    const dialogue = [
        "",
        "Hello everyone",
        "Today we will have a special guest",
        "Let us all welcome John Smith",
        "...",
        "....",
        ".....",
        "......",
        "Hello????",
        "See you all next time"
    ];
    
    function init() {
        window.addEventListener("keydown", keyDown, false);
        window.addEventListener("keyup",()=>{isKeyDown = false;},false);
        
        window.requestAnimationFrame(animation);
      }

    function animation(){
        frameCount++;
        dialogueTimeCount++;

        if (frameCount < frameRate) {
            window.requestAnimationFrame(animation);
            return;
        }
        frameCount = 0;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(tv,tvPosx,tvPosy,100,100);
        
        if(dialogueTimeCount >= dialogueTimeRate){
            if(isDisplayed){
                index = (index+1) % dialogue.length;
                isDisplayed = false;
            }
            displayDialogue();
            setTimeout(reset,2000);
        }

        if(isKeyDown)
            drawFrame(walkAnimLoop[currWalkAnimIndex], currDirection, avatarPosx, avatarPosy);
        else
            drawFrame(0, currDirection, avatarPosx, avatarPosy);

        currWalkAnimIndex = (currWalkAnimIndex+1) % walkAnimLoop.length;        

        window.requestAnimationFrame(animation);
    }
      
    function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(
          avatar,
          frameX * width,
          frameY * height,
          width,
          height,
          canvasX,
          canvasY,
          scaledWidth,
          scaledHeight
        );
      }
    
    function keyDown(event){
        switch(event.keyCode){
            //a key
            case 65:
                isKeyDown = true;
                currDirection = 2;
                avatarPosx -= speed;
                if(avatarPosx <= 0)
                    avatarPosx = 0;
                break;
            //d key
            case 68:
                isKeyDown = true;
                currDirection = 3;
                avatarPosx += speed;
                if(avatarPosx >= canvas.width-30)
                    avatarPosx = canvas.width-30;
                break;
        }
    }

    function displayDialogue(){
        if (index !== 0) {
            ctx.fillStyle = "#ffffffaa";
            ctx.fillRect(tvPosx-10,tvPosy-20,dialogue[index].length*10,30);
        }
          ctx.font = "16px sans-serif";
          ctx.fillStyle = "black";
          ctx.fillText(dialogue[index],tvPosx-5,tvPosy-5);
    }

    function reset(){
        dialogueTimeCount = 0;
        isDisplayed = true;
    }
});