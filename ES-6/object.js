let name = "Md. Rafikul Islam";
let email = "rafikulswe@gmail.com";

const intro = {
    name,
    email,
    print(){
        console.log("my name "+this.name+" and email "+this.email);
    }
}

intro.print();
console.dir(intro); //for show the object structure.