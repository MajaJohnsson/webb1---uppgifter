const painting = document.querySelector("#painting");

painting.addEventListener("mouseover", function() {
    document.getElementById("textPainting").innerHTML = "Detta är en målning av en båt ute på havet, med en något abstrakt strand";
});

painting.addEventListener("mouseout", function() {
    document.getElementById("textPainting").innerHTML = "";
});


function getCurrentKey(event) {
    let x = event.screenX;
    let y = event.screenY;

    document.getElementById("text").innerHTML = "Pilen är på x: " + x + " och y: " + y;
}




//event
//evt.preventDefault eller return false
//removeEventListener