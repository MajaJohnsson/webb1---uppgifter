let database;

let objectStore;

//skapa databas
window.onload = function createDatabase() {
    const request = window.indexedDB.open("Animals", 1);

    request.onsuccess = function (event) {
        database = event.target.result;
    }

    request.onupgradeneeded = function (event) {
        database = event.target.result;

        objectStore = database.createObjectStore("animal", {keyPath: "name"});

        objectStore.createIndex("name", "name");
        objectStore.createIndex("age", "age");
        objectStore.createIndex("animal", "animal");

        objectStore.transaction.oncomplete = function () {
            addAllAnimals();

            console.log(objectStore);
        }   
    }

}

//lägg till data
function addAllAnimals() {
    const transaction = database.transaction("animal", "readwrite");

    objectStore = transaction.objectStore("animal");

    document.getElementById("animalList").innerHTML = "";

    for (let animal of animals) {
        let request = objectStore.add(animal);

        request.onsuccess = function () {
            console.log("tillagd djur lyckades" + animal.name);
        }

        request.onerror = function () {
            console.log("tillagd djur misslyckadeds" + animal.name);
            document.getElementById("animalList").innerHTML = "Djuren finns redan i databasen!";
        }
    }
}

//hämta data
function getAllAnimals() {
    let request = database.transaction("animal", "readonly").objectStore("animal").getAll();

    document.getElementById("animalList").innerHTML = "";

    request.onsuccess = function () {

        let foundAnimals = request.result;

        for (let animal of foundAnimals) {
            document.getElementById("animalList").innerHTML += animal.name + " " + animal.age + " " + animal.animal + "<br>";
            console.log(animal.name + " " + animal.age + " " + animal.animal);
        }
    }
}

//ta bort data
function deleteAnimal() {

    const transaction = database.transaction("animal", "readwrite");
    const objectStore = transaction.objectStore("animal");

    document.getElementById("animalList").innerHTML = "";

    for (let animal of animals) {
        const request = objectStore.delete(animal.name);

        request.onsuccess = function () {
            console.log("Djur borttaget: " + animal.name);
        }
    }
}

const animals = [
    {name: "Jonas", age: "7", animal: "lejon"},
    {name: "Hanna", age: "3", animal: "hamster"},
    {name: "Petter", age: "10", animal: "elefant"},
    {name: "Felix", age: "2", animal: "get"},
];