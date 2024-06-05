import React from "react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/Book.context";

//Components
import Search from "../components/Search/Search";

//Layout
import Grid from "../layout/Grid/Grid";

export default function Home() {
  const { books, loading } = useBooks();

  return (
    <div className="container">
      <header>
        <h1>
          B<span>oo</span>kz<span>.</span>
        </h1>
        <span>oo.</span>
        <div className="options">
          <Search />
          <Link to="/shelf">
            <span className="pi pi-bookmark" id="self-icon"></span>
          </Link>
        </div>
      </header>
      <Grid books={books} loading={loading} />
    </div>
  );
}
