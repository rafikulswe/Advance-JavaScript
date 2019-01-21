//Topics:
//Function can be store in a variable.
function sayName(name){
    return 'Hello '+ name;
}
console.log(sayName('Rafi'));

var result = sayName;
var output = result('Rafi');
console.log(output);

//Function can be store in a array.
var arr = [10, 20];
arr.push(sayName('rafi'));
console.log(arr);

//Function can be store as an object.
var personDetails = {
    firstName: 'Rafi',
    lastName: 'Islam',
    print: sayName("rafikul"),
    output: function(){
        return 'Hi all';
    }
}
console.log(personDetails.print);
console.log(personDetails.output());

//We can create function as needed. It called invok function
var sum = 50 + (function(){
    return 10 + 15;
})();
console.log(sum);

//We can pass function as an argument.
function simplePrint(name, fun) {
    return fun(name);
}
var result = simplePrint('Rafikul Islam', sayName);
console.log(result);

//We can return function from another function.