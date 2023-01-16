import Container from 'react-bootstrap/esm/Container';
import '../../core/css/core.css';
import './about.css';

export function About(): JSX.Element {

  return (
    <>
        <section className="page-section" id="about">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About Me</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-camera fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <h4 className="my-3">E-Commerce</h4> */}
                        <p className="text-muted">Hi there, I'm Leon, a versatile photo and videographer based in the northeast of England. With a passion for visual storytelling, I've honed my craft through a diverse range of photography niches, including landscape, nature, and content creation for a semi-professional football team.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-user-graduate fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <h4 className="my-3">Responsive Design</h4> */}
                        <p className="text-muted">After self-teaching myself the basics, I went on to study Creative Media at college, where I further developed my skills, made valuable industry connections, and elevated the quality of my work.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-film fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <h4 className="my-3">Web Security</h4> */}
                        <p className="text-muted">I've had the opportunity to work on projects for notable clients such as The North East Football Writers Awards, live music gigs, and football clubs. As I continue to grow and evolve in the creative industry, I invite you to explore my website and discover the content I've created over the years.</p>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
  
}
