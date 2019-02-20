var book = {
    name: 'C Programming',
    author: 'John Hill',
    print: function() {
        console.log('book name is '+this.name+ ' and author is '+this.author);
    }
}
//add new value
book.price = '100';

//how to view/call object
book.print();
console.log('Value of Price '+book.price);
console.log('Name of book '+book['name']);

//How to traverse the object
for (var property in book) {
    console.log(property+' '+book[property]);
    
}