const BookList = ({ books, listTitle }) => {
  return (
    <div className="bookList">
      <h2 className="bookListTitle">{listTitle}</h2>

      <div className="scrolling-wrapper">
        {books.map((book) => (
          <div className="bookCard" key={book.id}>
            <a href={book.volumeInfo.previewLink} target="_blank">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            </a>
            <h4
              href={book.volumeInfo.previewLink}
              target="_blank"
              className="cardTitle"
            >
              {book.volumeInfo.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
