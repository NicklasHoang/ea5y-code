
btnzoomIn = document.getElementById('btn-zoom-in');
btnzoomOut = document.getElementById('btn-zoom-out');

btnzoomIn.addEventListener('click', zoomIn);
btnzoomOut.addEventListener('click', zoomOut);

var scale = 1;
var mouseX = 0;
var mouseY = 0;
var isDragging = false;

document.getElementById('Bild').addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', stopDrag);
document.addEventListener('mousemove', drag);

function zoomIn() {
    scale += 0.1;
    applyTransform();
}

function zoomOut() {
    scale -= 0.1;
    applyTransform();
}

function startDrag(event) {
    isDragging = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function stopDrag() {
    isDragging = false;
}

function drag(event) {
    if (isDragging) {
        var deltaX = event.clientX - mouseX;
        var deltaY = event.clientY - mouseY;

        mouseX = event.clientX;
        mouseY = event.clientY;

        document.getElementById('zoomedImage').style.transform += 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
    }
}

function applyTransform() {
    document.getElementById('zoomedImage').style.transform = 'scale(' + scale + ')';
}
