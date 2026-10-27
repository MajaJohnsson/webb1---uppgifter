let text = document.getElementById("text");
let fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", readFile);

function readFile() {

    for (let i = 0; i < fileInput.files.length; i++) {        
        let fileReader = new FileReader();
        let file = fileInput.files[i];

        fileReader.readAsText(file);

        fileReader.addEventListener("load", function () {
            text.innerHTML += fileReader.result + "<br/><br/>";
        });
    }

}
