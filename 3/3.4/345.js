const eventSource = new EventSource("http://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.5/example.php");

console.log(eventSource);

eventSource.onmessage = function(event) {
    console.log(event.data);
    document.getElementById("showData").innerHTML = event.data;
}