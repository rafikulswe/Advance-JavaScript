var arr = [10,15,20,25,30];
var newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 1) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
//we can use map function for this work
var newArray = arr.map(function(value) {
    return value + 2;
})
console.log(newArray);
