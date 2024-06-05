import React from "react";
import Card from "../../components/Card/Card";

//Components
import SkeletonCard from "../../components/Skeleton/Skeleton";

import "./Grid.css";

const Grid = ({ books, loading }) => {
  const placeholderCards = Array.from({ length: 10 });

  return (
    <div className="grid">
      {loading
        ? placeholderCards.map((_, index) => <SkeletonCard key={index} />)
        : books.map((book, index) => (
            <Card
              key={index}
              title={book.title}
              author={
                book.author_name
                  ? book.author_name[0]
                  : "Unknown Author"
              }
              book={book}
            />
          ))}
    </div>
  );
};

export default Grid;
