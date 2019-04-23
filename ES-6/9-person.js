class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    print(){
        console.log(`My name is ${this.name}. and Email is ${this.email}`);
    }
}

var obj = new Person('Rafikul Islam', 'rafikulswe@gmail.com');
obj.print();