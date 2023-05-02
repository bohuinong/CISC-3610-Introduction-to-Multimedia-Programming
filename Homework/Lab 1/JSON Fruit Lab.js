let fruit = [
    {name : "Apple", quantity : 20, color : "red"},
    {name : "Orange", quantity : 10, color : "orange"},
    {name : "Banana", quantity : 15, color : "yellow"},
    {name : "Kiwi", quantity : 5, color : "brown"},
    {name : "Blueberry", quantity : 5, color : "blue"},
    {name : "Grapes", quantity : 10, color : "purple"}
];
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
for(i = 0;i<fruit.length;i++){
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = fruit[i].color;
    let width = fruit[i].quantity*40;
    ctx.fillRect(20,20+80*i,width,70);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.fillText(fruit[i].name+" "+fruit[i].quantity,20,70+80*(i));
}