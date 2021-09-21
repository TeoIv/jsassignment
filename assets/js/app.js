console.log('JavaScript is working!')

function drawDiamond(context, x, y, width, height) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x - width / 2, y + height / 2);
    context.lineTo(x, y + height);
    context.lineTo(x + width / 2, y + height / 2);
    context.closePath();

    context.fillStyle = "black";
    context.fill();
}
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    drawDiamond(context, 150, 40, 75, 90);
};