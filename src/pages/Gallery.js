import React, { Component } from "react";

import "../css/Gallery.css";

const GalleryImages = [
  {
    id: "1",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "0",
  },
  {
    id: "2",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/aob0ukAYfuI/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "1",
  },
  {
    id: "3",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/EUfxH-pze7s/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "2",
  },
  {
    id: "4",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/M185_qYH8vg/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "3",
  },
  {
    id: "5",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/sesveuG_rNo/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "4",
  },
  {
    id: "6",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/AvhMzHwiE_0/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "5",
  },
  {
    id: "7",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/2gYsZUmockw/400x300",
    imageAlt: "",
  },
  {
    id: "8",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/EMSDtjVHdQ8/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "6",
  },
  {
    id: "9",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/8mUEy0ABdNE/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "7",
  },
  {
    id: "10",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/G9Rfc1qccH4/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "8",
  },
  {
    id: "11",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/aJeH0KcFkuc/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "9",
  },
  {
    id: "12",
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",
    imageAlt: "",
    imageTarget: "#carouselExample",
    imageSlide: "10",
  },
];


class Gallery extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container-fluid">
            <h1 className="font-weight-light text-center m-5">
              Gallery
            </h1>

            <hr className="mt-2 mb-5"></hr>

            <div
              className="row text-center text-lg-left"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              {GalleryImages.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6">
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
}

export default Gallery ;