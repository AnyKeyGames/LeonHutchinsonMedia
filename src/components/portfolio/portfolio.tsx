import Container from 'react-bootstrap/esm/Container';
import { PortfolioElement } from '../portfolio-element';

import { portfolioData} from '../../data/data'

export function Portfolio(): JSX.Element {
    function generateElement() {
        return portfolioData.map((data: any, index) => <PortfolioElement content={data} number={index} key={data.title}></PortfolioElement>)
    }
  return (
    <>
 <section className="page-section bg-light" id="portfolio">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio Highlights</h2>
                    <h3 className="section-subheading text-muted">Explore my latest featured work. <br></br>
                    Click into each card to find out more about the project.
                    </h3>
                </div>
                <div className="row">
                    {generateElement()}
                </div>
            </Container>
        </section>
    </>
  )
  
}
