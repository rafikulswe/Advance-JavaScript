function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}

var book1 = new Book('Physics', 'Toffajjol', '250');
var book2 = new Book('Sheser Kobita', 'Robi Thakur', '450');

var allBooks = [book1, book2];

allBooks.forEach(allBooks => {
    console.log(allBooks.price);
});
// console.log(allBooks);



//for see object property
for (var props in book1) {
    console.log('Property = '+props);
}

