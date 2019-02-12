//foreach example
var arr = [4, 5, 3, 2, 7, 1];
//one way
arr.forEach(element => {
    console.log('array element = '+element);
});

//another way
arr.forEach(function(element, index) {
    console.log('array element = '+element+ ' index = ', index);
})




//making of foreach
function loop(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
         callback(arr[i], i);
    }
}
loop(arr, function(val, index) {
    console.log("array Element = "+val+" index = "+ index);
})
