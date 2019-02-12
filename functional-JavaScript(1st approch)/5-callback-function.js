//Generally we write code in this way.
function display(name, print) {
    print(name);
}
display('Rafikul Islam', print);

function print(args) { //this function is a fixed function
    console.log("Hello Mr. "+args);
}


//we can write this above code using callback function
function display(name, print) {
    print(name);
}
display("Mr. Rafikul Islam", function(name) {   //this is callback function
    console.log('Hello Everyone I am '+name);
});
display("Mr. Rafikul Islam", function(name) {
    console.log('Length of this name is '+name+" = "+ name.length);
});
//Here we can use this function for multiple purpose.


//Another Example of callback function
var myInfo ={
    name: 'Rafikul',
    age: 24,
    email: 'rafikul351016@gmail.com'
}

function displayMyInfo(person, callback) {
    if (person.age >= 18) {
        callback(person.email);
    } else {
        console.log('You are very little');
    }
}

displayMyInfo(myInfo, function(email) {
    console.log("Email has sent succesfuly to "+ email);
});


//Example of Multiple callback function
function displayName(name, callback1, callback2) {
    callback1(name);
    callback2(name);
}
displayName('Rafikul Islam', function(name) {
    console.log("uppercase: "+ name.toUpperCase());
}, function(name) {
    console.log("lowercase: "+ name.toLowerCase());    
});