var mouseEvent="empty";
var last_x, last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
width_line=10;

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    radius_line=document.getElementById("radius_line").value;

    mouseEvent="mousedown";

}

canvas.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e){
    mouseEvent="mouseleave";

}

canvas.addEventListener("mouseup", myMouseup);

function myMouseup(e){
    mouseEvent="mouseup";

}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        console.log("last position of x and y coordinates : ");
        console.log("x = "+ last_x + " y = "+ last_y);

        console.log("current position of x and y coordinates : ");
        console.log("x = "+ current_x + " y = "+ current_y);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.arc(current_x, current_y, radius_line, 0, 2*Math.PI);
        ctx.stroke();

    }
    
    last_x=current_x;
    last_y=current_y;
}

function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}