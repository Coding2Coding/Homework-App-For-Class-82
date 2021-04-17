var canvas=document.getElementById("canvas");
var canvasReference=canvas.getContext("2d");
var Event="empty";
var penColor=document.getElementById("circleColor")
var width=document.getElementById("width");
canvas.addEventListener("mousedown",mouseDown);

function mouseDown(e) {
    Event="mousedown";
}

canvas.addEventListener("mousemove",mouseMove);

function mouseMove(e) {
    var xPosition=e.clientX-canvas.offsetLeft;
    var yPosition=e.clientY-canvas.offsetTop;
    
    if(Event=="mousedown") {
        canvasReference.beginPath();
        canvasReference.strokeStyle=penColor;
        canvasReference.lineWidth=width;
        canvasReference.moveTo(xPosition,yPosition);
        canvasReference.arcTo(200,200,20,0,2*Math.PI);
        canvasReference.stroke();
    }

    canvas.addEventListener("mouseup",mouseUp);

    function mouseUp(e) {
        Event="mouseup";
    }

    canvas.addEventListener("mouseleave",mouseLeave);

    function mouseLeave(e) {
        Event="mouseleave";
    }

    function clearCanvas() {
        canvasReference.clearRect(0,0,canvasReference.width,canvasReference.height);
    }
}