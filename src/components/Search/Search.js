import React, { Fragment, useState, useEffect } from "react";
import { useBooks } from "../../context/Book.context";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setBooks, setLoading } = useBooks();

  const fetchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    const data = await response.json();
    setBooks(data.docs);
    setLoading(false);
  };

  const debouncedFetchBooks = debounce(fetchBooks, 500);

  useEffect(() => {
    debouncedFetchBooks(query);
    return () => {
      debouncedFetchBooks.cancel();
    };
  }, [query]);

  return (
    <Fragment>
      {/* <span className="pi pi-search" id="search-icon"></span> */}
      <input
        type="search"
        id="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Fragment>
  );
};

export default SearchBar;