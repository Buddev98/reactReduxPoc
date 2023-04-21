import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbId" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
