function openContent(event, number) {
    let i;
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(number).style.display = "block";
    event.currentTarget.className += " active";

}

window.onload = function() {
    let tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}