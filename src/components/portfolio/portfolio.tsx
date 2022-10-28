import Container from 'react-bootstrap/esm/Container';
import { PortfolioElement } from '../portfolio-element';
import { PortfolioModal } from '../portfolio-modal';

import { portfolioData} from '../../data/data'

export function Portfolio(): JSX.Element {
    // console.log(portfolioData)
    function generateElement() {
        return portfolioData.map((data: any) => <PortfolioElement content={data} key={data.title}></PortfolioElement>)
        // return <div></div>
    //   return results.map((result, index) => <ProfileMatchResult data={ [result, index] } key={ index }></ProfileMatchResult>)


    }
{/* <a className='nav-item' href={route.path} key={ route.text }>{ route.text }</a> */}
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
                    {/* <PortfolioElement></PortfolioElement> */}
                    {/* <PortfolioElement></PortfolioElement>
                    <PortfolioElement></PortfolioElement>
                    <PortfolioElement></PortfolioElement>
                    <PortfolioElement></PortfolioElement>
                    <PortfolioElement></PortfolioElement>                     */}
                    
                </div>
            </Container>
        </section>
    </>
  )
  
}
