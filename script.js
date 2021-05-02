var canvas = document.getElementById("canvas");
var canvasReference = canvas.getContext("2d");
var Event="empty";

canvas.addEventListener("mousedown",mouseDown);

function mouseDown(e) {
    Event = "mousedown";
}

canvas.addEventListener("mousemove",mouseMove);

function mouseMove(e) {
    var xPosition = e.clientX-canvas.offsetLeft;
    var yPosition = e.clientY-canvas.offsetTop;
    
    if(Event == "mousedown") {
        var penColor = document.getElementById("circleColor").value;
        var width = document.getElementById("width").value;
        canvasReference.beginPath();
        canvasReference.strokeStyle=penColor;
        canvasReference.lineWidth=width;
        canvasReference.arc(xPosition, yPosition, 20, 0, 2*Math.PI);
        canvasReference.stroke();
    }
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
        canvasReference.clearRect(0, 0, canvas.width, canvas.height);
    }