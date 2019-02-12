//1st Example
function outer() {

    function inner() {
        var name = 'Hello this is inner function.';
        return name;
    }

    var surname = ' it is outer function';
    return inner().concat(surname);
}
var res = outer();
console.log(res);

//2nd Example
function calculation(a, b) {
    
    function sum() {
        return a+b;
    }
    function sub(){
        return a-b;
    }
    return sum() + sub();
}
var result = calculation(10, 5);
console.log(result);
