import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "../css/Gallery.css";

const GalleryImages = [
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/aob0ukAYfuI/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/EUfxH-pze7s/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/M185_qYH8vg/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/sesveuG_rNo/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/AvhMzHwiE_0/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/2gYsZUmockw/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/EMSDtjVHdQ8/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/8mUEy0ABdNE/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/G9Rfc1qccH4/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/aJeH0KcFkuc/400x300",
    imageAlt: "",
  },
  {
    imageHref: "#",
    cName: "img-fluid img-thumbnail",
    imageSrc: "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",
    imageAlt: "",
  },
];

class Gallery extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container-fluid">
            <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
              Gallery
            </h1>

            <hr class="mt-2 mb-5"></hr>

            <div class="row text-center text-lg-left">
            {GalleryImages.map((item, index) => {
              return (
               
                  <div class="col-lg-3 col-md-4 col-6">
                    <a href={item.imageHref} class="d-block mb-4 h-100">
                      <img
                        key={index}
                        className={item.cName}
                        src={item.imageSrc}
                        alt={item.imageAlt}
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

export default Gallery;
