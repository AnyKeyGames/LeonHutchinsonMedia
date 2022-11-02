
import '../../core/css/core.css';
import { carouselData } from '../../data/carousel';
import { CarouselHeaderItem } from './carousel-header-item';
import './header.css';

export function CarouselHeader(): JSX.Element {

  function getCarouselItems() {
    return carouselData.map((data: any, index) => <CarouselHeaderItem content={data} number={index} key={data.title}></CarouselHeaderItem>)
  }

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {getCarouselItems()}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
  
}
