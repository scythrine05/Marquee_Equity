import React, { useEffect, useState } from "react";

import "./Card.css";

const Card = ({ title, author, book }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarked(bookmarks.some((b) => b.key === book.key));
  }, [book.key]);

  const handleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (bookmarked) {
      bookmarks = bookmarks.filter((b) => b.key !== book.key);
    } else {
      bookmarks.push(book);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no_cover.gif";

  return (
    <div className="card">
      <img src={coverUrl} alt={`${title} cover`} />
      <h3>{title}</h3>
      <p>{author}</p>
      <div className="bookmark">
      <span onClick ={handleBookmark} className={bookmarked ? "pi pi-bookmark-fill" : "pi pi-bookmark" } style={{ color: bookmarked ? "#5d3fd3" : "#000"  }} id="book-icon"></span>
      </div>
    </div>
  );
};

export default Card;
