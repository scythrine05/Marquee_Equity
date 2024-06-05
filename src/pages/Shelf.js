import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Layout
import Grid from "../layout/Grid/Grid";

const Shelf = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(bookmarks);
  }, []);

  return (
    <div className="container">
      <header>
        <Link to={"/"}>
          <div className="pi pi-arrow-circle-left" id="back-icon"></div>
        </Link>
        <h1>
          M<span>y</span> Sh<span>el</span>f<span>.</span>
        </h1>
        <span>Shelf.</span>
      </header>
      {bookmarks && bookmarks.length ? (
        <Grid books={bookmarks} loading={false} />
      ) : (
        <div className="empty-container">
          <h1>No saved books</h1>
        </div>
      )}
    </div>
  );
};

export default Shelf;
