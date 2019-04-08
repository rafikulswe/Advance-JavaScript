const arr = [10,20,30];
let [a,b,c] = arr; //way to element assign.

//way to show
console.log(a);
console.log(b);
console.log(arr);

const obj = {
    name: "rafikul islam",
    email: "rafikulswe@gmail.com"
}

let {name, email} = obj;
console.log(name, email);

const print = ({name,email}) => {
    console.log(name, email);
}
print({name, email}) //when we pass para as an obj, we have to call the function with para as an obj.