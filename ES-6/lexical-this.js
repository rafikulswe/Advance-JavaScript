var details = {
    name: "Rafikul Islam",
    print: function() {
        setTimeout(function() {
            console.log(this.name); //output undefined
        }, 1000)
    }
}
details.print();

//ES6 problem solved
var anotherDetails = {
    name: "Rafikul",
    print: function() {
        setTimeout(()=>{
            console.log(this.name);
        },1000)
    }
}
anotherDetails.print();