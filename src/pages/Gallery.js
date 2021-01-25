import React from "react";

import Image1 from "../img/ZoePeople8_400X400.jpg";
import Image2 from "../img/ZoePeople5_400X400.jpg";
import Image3 from "../img/ZoePeople4_400X400.jpg";
import Image4 from "../img/ZoePeople3_400X400.jpg";
import Image5 from "../img/ZoePeople2_400X400.jpg";
import Image6 from "../img/ZoePeople9_400X400.jpg";
import Image7 from "../img/ZoePeople7_400X400.jpg";
import Image8 from "../img/ZoePeople1_400X400.jpg";
import Image9 from "../img/ZoePeople6_400X400.jpg";

import "../css/App.css";

const GalleryImages = [
  {
    id: "1",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image1,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "0",
  },
  {
    id: "2",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image2,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "1",
  },
  {
    id: "3",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image3,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "2",
  },
  {
    id: "4",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image4,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "3",
  },
  {
    id: "5",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image5,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "4",
  },
  {
    id: "6",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image6,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "5",
  },
  {
    id: "7",
    imageHref: "#",
    cName: "img-fluid mt-4",
    imageSrc: Image7,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "6",
  },
  {
    id: "8",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image8,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "7",
  },
  {
    id: "9",
    imageHref: "#",
    cName: "img-fluid",
    imageSrc: Image9,
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "8",
  },
];

function Gallery() {
  return (
    <>
      <div className="section">
        <div className="container m-5">
          <div className="row">
            <h1 className="text-center m-4">Gallery</h1>
          </div>

          <hr className="mt-2"></hr>

          <div
            className="row text-center text-lg-left"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {GalleryImages.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-6">
                  <a href={item.imageHref} class="d-block mb-4 h-100">
                    <img
                      key={index.id}
                      className={item.cName}
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      data-target={item.imageTarget}
                      data-slide-to={item.imageSlide}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
