const pic = document.getElementById("pictureDiv");

function changePictureSize() {

    //AI användes för att förstå hur man kan få bilden att förbli stor efter att animationen var klar

    const animation = pic.animate( 
        {
            width: "500px",
            height: "667px"
        }, 
        {
            duration:1000,
            easing: "linear",
            fill:"forwards"
        }
    );

    animation.finished.then(function () {
        document.getElementById("text").innerHTML = "Nu borde du se hela bilden!";
    });
}