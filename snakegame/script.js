
function app(){

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");

    let run = true;
    let x = 0;
    
    ctx.beginPath();
    ctx.rect(x, 0, 10, 10);
    ctx.rect(x+10, 0, 10, 10);
    ctx.rect(x+20, 0, 10, 10);
    ctx.stroke();
}

function snake(){
    
}

app();