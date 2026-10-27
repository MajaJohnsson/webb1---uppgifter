const names = ["vera", "astrid", "olivia", "alice", "elsa"];

const text = "vera astrid olivia alice elsa";

let inputName;

let responseName;

let numberOne;

let numberTwo;

let answerMinMax;

let inputWord;

let responseLength;

//skapa ett html som innehåller ett textfält där man kan skriva saker

function checkNameInList() {
    inputName = document.getElementById("nameInput").value.toLowerCase();

    let check = /[0-9]/g;
    let result = inputName.match(check);

    
    if (names.includes(inputName)){               
        responseName = "Namnet finns med!";
        responseName = resultat;
    } else {
        responseName ="Namnet finns inte med. Gör en ny gissning!";
    }
    
    console.log(inputName);
    document.getElementById("answerNamePopularCheck").innerHTML = responseName;

}

function getDate() {
    //visa datumet i html
    const date = new Date();
    document.getElementById("date").innerHTML = date;
    
}

function checkMinMaxNumber() {
    numberOne = document.getElementById("firstNumber").value;
    
    numberTwo = document.getElementById("secondNumber").value;

    if (Number(firstNumber) != 0 && Number(numberTwo)) {
    
        answerMinMax = Math.min(numberOne, numberTwo);
        
        document.getElementById("answerNumberCheck").innerHTML = answerMinMax;
    
    } else {
        document.getElementById("answerNumberCheck").innerHTML = "ogiltiga siffror, prova igen";
    }
}

function checkWordLength() {
    inputWord = document.getElementById("wordLength").value;
    
    responseLength = inputWord.length;   
    document.getElementById("answerWordLengthCheck").innerHTML = responseLength;

}
