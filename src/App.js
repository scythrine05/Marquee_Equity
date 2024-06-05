import { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "primeicons/primeicons.css";
import { BookProvider } from "./context/Book.context";

import "./App.css";

function App() {
  useEffect(() => {}, []);

  return (
    <BookProvider>
    <Router>
      <div className="App">
        <AllRoutes />
      </div>
    </Router>
    </BookProvider>
  );
}

export default App;
