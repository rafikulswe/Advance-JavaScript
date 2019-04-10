//Default Parameters
var sum = (a=1,b=a) => {
    console.log(a*b);
}
sum(10,5);
sum();

//Rest Operator
let arraySum = (...num) => {
    console.log(num);
    return num.reduce((a, b) => a+b);
}
console.log(arraySum(10,20,30,40));

//Spread Operator
let arr = [10,20,40,50];
arr = [...arr, 100, 200]; //...arr means whole obj/var's copy
console.log("new element insertion in an array "+arr);
console.log(...arr);

var obj = {
    name: "Rafikul",
    email: "rafikul@gmail.com"
}
var obj2 = {
    ...obj,
    age: 20
} 
console.log(obj2);



