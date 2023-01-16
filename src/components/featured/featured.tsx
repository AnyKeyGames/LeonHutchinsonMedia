import Container from 'react-bootstrap/esm/Container';
import '../../core/css/core.css';

export function Featured(): JSX.Element {

  return (
    <>
        <section className="page-section featured-secti" id="featured">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Featured Video</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-9">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/VFPInQmC8jE" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>    
                        </iframe>
                    </div>
                    <div className="col-md-3">
                        <p className="text-muted">Check out our latest video production on a non-league football match between Ryhope CW and Bishop Auckland. This video offers an intimate look at the behind-the-scenes preparations, capturing the adrenaline and emotions of the players, coaches, and fans. </p>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}
