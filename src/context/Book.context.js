import React, { createContext, useState, useContext, useEffect } from "react";

const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomBooks = async () => {
      setLoading(true);
      const response = await fetch(
        "https://openlibrary.org/search.json?q=random&limit=10&page=1"
      );
      const data = await response.json();
      setBooks(data.docs);
      setLoading(false);
    };

    fetchRandomBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, setBooks, loading, setLoading }}>
      {children}
    </BookContext.Provider>
  );
};
