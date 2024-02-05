import React from 'react'
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import img from '../images/unsplash_iEiUITs149M.svg'

export default function Img() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div style={{marginTop:'-15px'}}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        style={{ position: "relative" }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="One" />
          <Carousel.Caption>
            <h2>Title 1</h2>
            <p>Content.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="two" />
          <Carousel.Caption>
            <h2>Title 2</h2>
            <p>Content.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="two" />
          <Carousel.Caption>
            <h2>Title 3</h2>
            <p>Content.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="two" />
          <Carousel.Caption>
            <h2>Title 4</h2>
            <p>Content.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="two" />
          <Carousel.Caption>
            <h2>Title 5</h2>
            <p>Content.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
