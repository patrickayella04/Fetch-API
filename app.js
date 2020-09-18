// Fetch API
// A newer standard for dealing with http repuests. Fetch is a part of thw widow oject if you check in console for window. 

document.getElementById('button1').addEventListener('click', getText);

function getText() {
    fetch('test.txt').then(function (res) { // Fetch function returns promises. And when you get a response from a promise you have to use .then()

        console.log(res)
        console.log(res.text())  // Gives us promise result which is 'This is a sample text file' in the console. To get a response from a promise we need to use .then().
        return res.text(); // We want to return the text method thats in prototype. // res.text() returns a promise so we call another .then() below. 
    }).then(function (data) { // Here we catch that promise from the return above then we get the data below. 
        console.log(data);  //we should get 'This is a sample text file'
    });

    

}