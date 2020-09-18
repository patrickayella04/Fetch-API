// Fetch API
// A newer standard for dealing with http repuests. Fetch is a part of thw widow oject if you check in console for window. 

document.getElementById('button1').addEventListener('click', getText);

function getText() {
    fetch('test.txt').then(function (res) {
        console.log(res);
    }); // Fetch function returns promises. And when you get a response from a promise you have to use .then()
}