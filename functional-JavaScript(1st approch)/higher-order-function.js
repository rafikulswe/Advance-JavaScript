//annonymous function means which function has no name.
var newArr = [1, 2, 3, 4];
newArr.forEach(simpleTraverse);

function simpleTraverse(param) {
    console.log(param);
}

function mainFunc() {
    return function(name) { //this function is an annonymous function
        return 'Welcome dear '+name;
    }
}

var output = mainFunc();
var display = output('Rafi');
display;

//we can write another way to above 3 lines
var outdisplay = mainFunc()('Rafikul');
outdisplay;
