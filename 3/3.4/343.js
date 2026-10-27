var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        document.getElementById("answer").innerHTML = xhttp.responseText;
    }
}

function sendNumbers() {
    let number1 = Number(document.getElementById("numberOne").value);
    let number2 = Number(document.getElementById("numberTwo").value);

    if (Number.isInteger(number1) && Number.isInteger(number2)) {
        xhttp.open("GET", `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`, true);
        xhttp.send();
    }
}
