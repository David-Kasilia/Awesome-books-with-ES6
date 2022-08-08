/* eslint max-classes-per-file: ["error", 2] */

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
    const books = StoreBooks.getBooks();
    books.splice(title, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export class UI {
  static displayBooks() {
    const books = StoreBooks.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.getElementById('bookList');

    const listContainer = document.createElement('tr');

    listContainer.innerHTML = `
      <td class="bookTitle">"${book.title}"<span> By <span> </td>
      <td class="bookAuthor" >${book.author}</td>  
      <td><button class="remove">Remove</button></td>
      `;

    bookList.appendChild(listContainer);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}
