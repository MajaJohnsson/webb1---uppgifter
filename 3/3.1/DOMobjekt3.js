const submitbtn = document.getElementById("submitbtn");

window.onload = function() {
    submitbtn.addEventListener("click", preventDefault);
}

function preventDefault (event) {
    event.preventDefault();
}

function removeClickListener() {
    submitbtn.removeEventListener("click", preventDefault);
}

//evt.preventDefault eller return false
//removeEventListener