import { useState } from "react";

const BookCard = ({ books }) => {
  return books.map((book) => (
    <div className="bookCardSearch" key={book.id}>
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
  ));
};

export default BookCard;
