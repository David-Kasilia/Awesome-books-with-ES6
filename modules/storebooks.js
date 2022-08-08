// eslint-disable-next-line import/prefer-default-export
export class StoreBooks {
  static getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = StoreBooks.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const booksListCollection = StoreBooks.getBooks();
    booksListCollection.splice(title, 1);
    localStorage.setItem('books', JSON.stringify(booksListCollection));
  }
}