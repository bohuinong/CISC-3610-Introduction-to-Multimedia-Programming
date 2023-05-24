document.addEventListener("DOMContentLoaded",function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    captionText("Bohui Nong");
    drawFloor();
    drawMoon();
    drawStars();
    drawHouse();

    function captionText(text){
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(text, canvas.width - 120, 20);
    }
    function drawFloor(){
        ctx.beginPath();
        ctx.fillStyle = "#321b0b";
        ctx.fillRect(0, canvas.height - 70, canvas.width, 70);
    }
    function drawMoon(){
        ctx.beginPath();
        ctx.fillStyle = "silver";
        ctx.arc(20,20,50,0,2*Math.PI);
        ctx.fill();
    }
    function drawStars(){
        for(x=0;x<100;x++){
            ctx.beginPath();
            ctx.fillStyle = "#D5AB55";
            let randomx = Math.floor(10+Math.random() * canvas.width);
            let randomy = Math.floor(Math.random() * 100);
            ctx.arc(70+randomx,randomy,1.2,0,2*Math.PI);
            ctx.fill();
        }
    }
    function drawHouse(){
        //house body
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(0,canvas.height-70-40,40,40);

        //house roof
        ctx.beginPath();
        ctx.fillStyle = "#9e5524";
        ctx.moveTo(0,canvas.height-70-40);
        ctx.lineTo(40,canvas.height-70-40);
        ctx.lineTo(20,canvas.height-70-70);
        ctx.fill();
    }
})
