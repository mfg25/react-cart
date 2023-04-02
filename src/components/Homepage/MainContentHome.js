import React, { useState, useEffect } from "react";
import "./MainContentHome.css";
import sliderExport from "../assets/sliderExport";
import section1 from "../assets/section1.png";
import section2 from "../assets/section2.png";
import section3 from "../assets/section3.png";
import { Link } from "react-router-dom";

const MainContentHome = () => {
  const [sliderImages, setSliderImages] = useState(sliderExport());
  const [currentItem, setCurrentItem] = useState(0);

  const clickSlide = (e) => {
    let isLeft = e.target.classList.contains("arrow-left");
    nextSlide(isLeft);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("atualização");
      updateCurrent(false, currentItem.length);
      nextSlide(false);
    }, 50000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const nextSlide = (isLeft) => {
    let maxItems = sliderImages.length;
    let current = updateCurrent(isLeft, maxItems);
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
      items[current].scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
    });
  };

  const updateCurrent = (isLeft, maxItems) => {
    let current;
    if (isLeft) {
      current = currentItem - 1;
    } else {
      current = currentItem + 1;
    }
    setCurrentItem(current);
    if (current >= maxItems) {
      current = 0;
    }
    if (current < 0) {
      current = maxItems - 1;
    }
    setCurrentItem(current);
    return current;
  };

  return (
    <main id="main-homepage">
      <section className="slider-container">
        <button className="arrow-left" onClick={clickSlide}>
          {" "}
          🢀{" "}
        </button>
        <button className="arrow-right" onClick={clickSlide}>
          {" "}
          🢂{" "}
        </button>
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.map((slide) => {
              return (
                <img
                  src={slide.image}
                  alt="slide"
                  key={slide.id}
                  className="item current-item"
                ></img>
              );
            })}
          </div>
        </div>
      </section>
      <Link to="/produtos/decorativos">
        <section className="section second-section">
          <h3>Linha decorativa</h3>
          <img src={section1}></img>
        </section>
      </Link>
      <Link to="/produtos/residencial">
        <section className="section third-section">
          <h3>Linha residencial</h3>
          <img src={section2}></img>
        </section>
      </Link>
      <Link to="/produtos/industrial" className="industrial-section">
        <section className="section fourth-section">
          <h3>Linha industrial</h3>
          <img src={section3}></img>
        </section>
      </Link>
    </main>
  );
};

export default MainContentHome;
