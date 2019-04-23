class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    print(){
        console.log(`My name is ${this.name}. and Email is ${this.email}`);
    }
}
export default Person;