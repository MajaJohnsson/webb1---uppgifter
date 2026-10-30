let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


//gradient
let gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "lightblue");
gradient.addColorStop(1, "lightpink");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 350, 200);

let cloud = new Image();
cloud.src = "cloud.png";

cloud.onload = function() {
    let pattern = ctx.createPattern(cloud, "repeat-x");

    ctx.fillStyle = pattern;
    ctx.beginPath();
    ctx.rect(0, 0, 350, 120);
    ctx.fill();
    ctx.globalAlpha = 0.2;
}

//bezier
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.bezierCurveTo(50, 200, 165, 40, 295, 200);
ctx.stroke();

//bezier2
ctx.beginPath();
ctx.moveTo(30, 200);
ctx.bezierCurveTo(30, 200, 165, 10, 315, 200);
ctx.stroke();

//linje
ctx.moveTo(0, 200);
ctx.lineTo(350, 200);
ctx.stroke();

//skuggor
ctx.shadowColor = "white";
ctx.shadowOffsetX = 5;

//kurvlinje
ctx.beginPath();
ctx.arc(200, 180, 50, 20, 20 * Math.PI);
ctx.stroke();
ctx.fillStyle= "orange";
ctx.fill();

//rektangel
ctx.beginPath();
ctx.rect(0, 200, 350, 200);
ctx.fillStyle= "lightgreen";
ctx.fill();

//text
ctx.font = "20px Arial";
ctx.strokeText("7/10 - 2026", 10, 380);

let unicorn = new Image();
unicorn.src = "unicorn.png";

unicorn.onload = function() {
    ctx.drawImage(unicorn, 50, 110);
}

//transperans
ctx.globalAlpha = 0.3;

//fungerar med live server
let download = document.getElementById("download");
download.addEventListener("click", function() {
    let link = document.getElementById("download");
    link.href = canvas.toDataURL("unicorn/png");
});
