import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../core/css/core.css';
import './header.css';

export function CarouselHeaderItem(props: any): JSX.Element {

  return (
    <>
        <div className={`carousel-item h-100 ${props.number === 0 ? "active" : ""}`}>
          <img
            className="d-block"
            src={props.content.img}
            alt={props.content.alt}
          />
          <Carousel.Caption>
            <p>{props.content.desc}</p>
          </Carousel.Caption>
        </div>
    </>
  )
  
}
