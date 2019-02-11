function display(args) {
    return function(name) {
        console.log(args+" "+name);
    }
}

var disVar = display('Hello'); //value of args
disVar('Rafikul'); //value of name