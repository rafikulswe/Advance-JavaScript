var arr = [10,15,20,25,30];
var newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 1) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

//we can do this above work by using filter function
var newArray = arr.filter(function(value) {
    return value % 2 == 0;
})
console.log(newArray);
