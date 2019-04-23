import Person from './person';

class Student extends Person{
    constructor(name, email, id){
        super(name,email);
        this.id = id;
    }
    output(){
        super.print();
        console.log(`Id: ${this.id}`);
    }
}
export default Student;