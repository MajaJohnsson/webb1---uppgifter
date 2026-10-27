setInterval(changePictureGrassToSun, 3000);

window.onload = function () {
    let pictureSunset = document.querySelector("#pictureSunset");
    pictureSunset.addEventListener("mouseover", changePictureSunToGrass);
}

function changePictureSunToGrass() {
    document.querySelector("#pictureSunset").src = "grass.png";
}

function changePictureGrassToSun() {
    document.querySelector("#pictureGrass").src = "sunset.png";
}

//lägg till attr jQuery