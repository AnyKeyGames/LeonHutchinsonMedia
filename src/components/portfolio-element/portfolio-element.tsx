import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { PortfolioModal } from '../portfolio-modal';

export function PortfolioElement(props: any): JSX.Element {
  const delay = { "--animation-delay": props.number } as React.CSSProperties;

    useEffect(() => {
      const hiddenElements = document.querySelectorAll('.hidden');
      const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  if(entry.isIntersecting){
                      entry.target.classList.add('show');
                  } else {
                      entry.target.classList.remove('show');
                  }
              })
          })
      hiddenElements.forEach((el) => observer.observe(el))
    })

  return (
    <>
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item hidden" style={delay}>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={props.content.headerImage} alt="..." />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{props.content.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{props.content.subheading}</div>
                </div>
            </div>
        </div>
        <PortfolioModal content={props.content}></PortfolioModal>
    </>
  )
  
}
