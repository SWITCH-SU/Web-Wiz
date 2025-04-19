import "./App.css";
import Cards from "./component/card";
import Inline from "./component/Inline";
import Data from "./assets/Bollywood.js";
import Data2 from "./assets/Folk.js";
import Data3 from "./assets/Classical.js";
import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Nav.jsx";
import Grid_l from "./component/Grid_l";
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function App() {
  const images = [
    "https://i.scdn.co/image/ab67616d00001e0283141000ee8ce3b893a0b425",
    "https://i.scdn.co/image/ab67616d00001e02b1a7fc692d68d8f5c8adfd2e",
    "https://via.placeholder.com/600x300?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="App">
      <Navbar />



      <div className="hero">
        <div className="carousel">
          <button onClick={prevImage} className="carousel-button">
            <NavigateBeforeIcon />
          </button>
          <div className="carousel-content">
            <img
              src={`${images[currentIndex]}`}
              alt={`Slide ${currentIndex}`}
              className="carousel-image"
            />
          </div>
          <button onClick={nextImage} className="carousel-button">
            <NavigateNextIcon />
          </button>
        </div>
      </div>


      <div className="hero2">
        <Grid_l />
      </div>
      <hr/>
      <div className="elm">
        <Inline name="BOLLYWOOD" path={Data} />
        <Inline name="FOLK" path={Data2} />
        <Inline name="CLASSICAL" path={Data3} />
      </div>
    </div>
  );
}

export default App;
