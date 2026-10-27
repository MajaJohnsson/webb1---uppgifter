let painting = document.querySelector("#pictureSunset");
let text = document.getElementById("text");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let toggle = document.getElementById("toggle");
let fadeIn = document.getElementById("fadeIn");
let fadeOut = document.getElementById("fadeOut");
let fadeToggle = document.getElementById("fadeToggle");

hide.addEventListener("click", hidePicture);
show.addEventListener("click", showPicture);
toggle.addEventListener("click", togglePicture);
fadeIn.addEventListener("click", fadeInPicture);
fadeOut.addEventListener("click", fadeOutPicture);
fadeToggle.addEventListener("click", fadeTogglePicture);

function hidePicture() {
    $("#pictureSunset").hide();
    document.getElementById("text").innerHTML= "Nu syns den inte!";
}

function showPicture() {
    $("#pictureSunset").show();
    document.getElementById("text").innerHTML= "Nu syns den!";
}

function togglePicture() {
    $("#pictureSunsetToggle").toggle();
}

function fadeInPicture() {
    $("#grassFade").fadeIn();
}

function fadeOutPicture() {
    $("#grassFade").fadeOut();
}

function fadeTogglePicture() {
    $("#grassFadeToggle").fadeToggle();
}

window.onload = function () {
    $("#pictureSunset").fadeTo(4000, 0.5);
    $("#pictureSunsetToggle").fadeTo(4000, 0.5);
    $("#grassFade").fadeTo(4000, 0.5);
    $("#grassFadeToggle").fadeTo(4000, 0.5);
}
