// Fetch API
// A newer standard for dealing with http repuests. Fetch is a part of thw widow oject if you check in console for window. 

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);


// Get local text file data
function getText() {
    fetch('test.txt').then(function (res) { // Fetch function returns promises. And when you get a response from a promise you have to use .then()

        // console.log(res)
        // console.log(res.text())  // Gives us promise result which is 'This is a sample text file' in the console. To get a response from a promise we need to use .then().
        return res.text(); // We want to return the text method thats in prototype. // res.text() returns a promise so we call another .then() below. 
    }).then(function (data) { // Here we catch that promise from the return above then we get the data below. 
        console.log(data);  //we should get 'This is a sample text file'
        document.getElementById('output').innerHTML = data; // Here we output the data instead of only console.loging it.
    }).catch(function (error) {
        console.log(error);
    });

    

}

// Get local json data
function getJson() {
    fetch('posts.json').then(function (res) { // Fetch function returns promises. And when you get a response from a promise you have to use .then()

        // console.log(res)
        // console.log(res.text())  // Gives us promise result which is 'This is a sample text file' in the console. To get a response from a promise we need to use .then().
        return res.json(); // We want to return the text method thats in prototype. // res.text() returns a promise so we call another .then() below. 
    }).then(function (data) { // Here we catch that promise from the return above then we get the data below. 
        console.log(data);  //we should get 'This is a sample text file'

        // Here we output the data instead of only console.loging it. It's an array so we'll have to loop through each of them.
        let output = '';
        data.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        }); 
        document.getElementById('output').innerHTML = output;

    })
        
        .catch(function (error) {
        console.log(error);
    });

    

}