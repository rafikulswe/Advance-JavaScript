//1st Example
function userName(name, age) {
    var output;
    if (name === 'rafi') {
        output = 'My name is '+name+' and my age is '+age;
    } else if(name === 'moni') {
        output = 'I am Mrs '+name+' and my age is '+age;
    }
    return output;
}
var result = userName('rafi');
console.log(result);

//2nd Example
function fullName() {
    return {
        userName: 'Rafikul',
        skill: ['Laravel', 'Javascript', 'Java'],
        print: function() {
            console.log(this.userName+' '+this.skill);
        }
    }
}
var show = fullName();
console.log(show.skill);
