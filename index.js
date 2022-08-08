/* eslint-disable consistent-return */
import { onNavItemClick, nav } from './modules/nav.js';
import { UI } from './modules/ui.js';
import { StoreBooks } from './modules/storebooks.js';
import { BookList } from './modules/booklist.js';
import { DateTime } from './luxon.js';

nav.addEventListener('click', onNavItemClick, false);

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.getElementById('bookForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    return false;
  }
  const newBook = new BookList(title, author);

  UI.addBookToList(newBook);

  StoreBooks.addBook(newBook);

  UI.clearFields();
});

document.getElementById('bookList').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  StoreBooks.removeBook(
    e.target.parentElement.previousElementSibling.previousElementSibling.textContent,
  );
});

const displayDate = document.getElementById('dateTime');
const today = DateTime.local();
const newDate = today.set();
displayDate.textContent = newDate.setLocale('de').toLocaleString(DateTime.DATETIME_MED);
today.setZone('system');
