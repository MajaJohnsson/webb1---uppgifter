let input = document.getElementById("pictureInput");
let showImage = document.getElementById("showImage");

input.addEventListener("drop", readPicture);

input.addEventListener("dragenter", preventDefault);
input.addEventListener("dragover", preventDefault);

function preventDefault(event) {
    event.stopPropagation();
    event.preventDefault();
}

function readPicture(event) {
    event.stopPropagation();
    event.preventDefault();

    let droppedImg = event.dataTransfer.files[0];

    const fileReader = new FileReader();

    fileReader.addEventListener("load", function(event) {
        showImage.src = event.target.result;
    });
    
    fileReader.readAsDataURL(droppedImg);
}

