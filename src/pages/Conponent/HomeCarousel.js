import React from "react";
import imgOne from "./../../assets/images/Amazon-Rain-Forest.jpg";
import imgTwo from "./../../assets/images/1200px-Sundarban_Tiger.jpg";
import imgThree from "./../../assets/images/hawaiiisland.jpg";

const HomeCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ maxHeight: "80vh" }}>
          <div className="carousel-item active position-relative h-100">
            <img src={imgThree} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper  p-3 ">
                  <h4 className="text-light">
                    “Welcome to the empire of travellers”
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={imgTwo} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper p-3">
                  <h4 className="text-light">
                    “Exploring the world is like investing on your life”
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={imgOne} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper p-3">
                  <h4 className="text-light">
                    “Travel makes your taste better”
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
