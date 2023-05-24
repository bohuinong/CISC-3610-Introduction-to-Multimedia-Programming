document.addEventListener("DOMContentLoaded",function(){
    let side1,side2,side3;
    let side1Input = document.getElementById("side1");
    let side2Input = document.getElementById("side2");
    let side3Input = document.getElementById("side3");
    let submit = document.getElementById("btn");
    let perimeter = document.getElementById("perimeter");
    let area = document.getElementById("area");

    side1Input.onchange = ()=>{
        side1 = Number(side1Input.value);
    }
    side2Input.onchange = ()=>{
        side2 = Number(side2Input.value);
    }
    side3Input.onchange = ()=>{
        side3 = Number(side3Input.value);
    }
    submit.onclick = answer;

    function answer(event){
        let perimeterAnswer = side1+side2+side3;
        let s = perimeterAnswer/2;
        let areaAnswer = Math.sqrt(s*(s-side1)*(s-side2)*(s-side2));
        perimeter.innerHTML = `Perimeter : ${perimeterAnswer}`;
        area.innerHTML = `Area : ${areaAnswer}`;
        event.preventDefault();
    }
})