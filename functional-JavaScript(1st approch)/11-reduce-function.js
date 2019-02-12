var arr = [10,15,20,25,30];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("array elements sum = "+sum);

//we can use reduce function for this above work
var summation = arr.reduce(function(a,b) {
    return a+b;
})
console.log("array elements summation = "+summation);
