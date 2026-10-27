const newTextColor = document.getElementById("textColor");

const newTextResize = document.getElementById("textResize");

const submit = document.getElementById("submitbtn");

const name = document.getElementById("name");

const email = document.getElementById("email");

newTextColor.addEventListener("click", function() {
    newTextColor.style.color = "purple";
});

//är detta rätt?
window.addEventListener("resize", function() {
    newTextResize.style.color = "red";
});

submit.addEventListener("click", function() {
    alert("Nu har du skickat in, tack!");
});

name.addEventListener("keydown", function() {
    document.getElementById("textKeyDown").innerHTML = "Nämen, vad kul att du fyller i formuläret!";
});

email.addEventListener("keydown", function() {
    document.getElementById("textKeyDown").innerHTML = "Nämen, vad kul att du fyller i formuläret!";
});


//mushändelser --
//dokument och fönsterhändelser --
//formulärhändelser --
//tangentbordshändelser --
//hover
//event
//evt.preventDefault eller return false
//removeEventListener