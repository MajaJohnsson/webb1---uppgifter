let wikiWindow;
const countdown = setTimeout(visitWikiForJavaScript, 10000);

let intervalForDisplayTime = setInterval(displayCurrentTime, 1000);

function startAlertBox() {
    alert("Välkommen till denna uppgift");
}

function promptFavoriteAnimal() {
    let animal = prompt("Vad är ditt favoritdjur? Skriv gärna!");

    if (animal != null) {
        let confirmAnswer= confirm("Du har svarat " + animal + ". Stämmer det?"); 
        if (confirmAnswer) {
    document.getElementById("favoriteAnimal").innerHTML= animal;
        } else {
    document.getElementById("favoriteAnimal").innerHTML= "Du har inte skrivt ett favoritdjur";
        }
    }
}

function visitWikiForJavaScript() {
    wikiWindow = window.open("https://sv.wikipedia.org/wiki/Javascript");
}

function closeWikiForJavaScript() {
    wikiWindow.close();
}

function stopCountdown() {
  clearTimeout(countdown);
}

function displayCurrentTime() {
    const date = new Date();
    document.getElementById("showTimeClock").innerHTML= date;
}

function stopDisplayCurrentTime() {
    clearInterval(intervalForDisplayTime);
}

function startDisplayCurrentTime() {
    intervalForDisplayTime = setInterval(displayCurrentTime, 1000);
}



    