const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => (
  books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
);
// Requisito 2
const oldBooksOrdered = (year) => {
  const maxYearsAgo = 60;
  const cutoffYear = year - maxYearsAgo;

  return books
    .filter((book) => book.releaseYear <= cutoffYear)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

// Requisito 4
const fantasyOrScienceFictionAuthors = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .map((book) => book.author.name)
  .sort();

// Requisito 5
const oldBooks = (year) => {
  const maxYearsAgo = 60;
  const cutoffYear = year - maxYearsAgo;

  return books
    .filter((book) => book.releaseYear <= cutoffYear)
    .map((book) => book.name);
};

// Requisito 6
const authorWith3DotsOnName = () => {
  const bookWith3DotsAuthor = books.find((book) => /^([A-Z]\. ){2}[A-Z]\./.test(book.author.name));
  return bookWith3DotsAuthor ? bookWith3DotsAuthor.name : null;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
