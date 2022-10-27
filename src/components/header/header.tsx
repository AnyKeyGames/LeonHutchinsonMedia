import Container from 'react-bootstrap/esm/Container';
import '../../core/css/core.css';
import './header.css';

export function Header(): JSX.Element {

  return (
    <>
        <header className="masthead">
            <Container>
                <div className="masthead-heading text-uppercase">Leon</div>
                <div className="masthead-heading text-uppercase">Hutchinson</div>

                <div className="masthead-subheading">NE Videographer / Phototographer</div>

                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </Container>
        </header>
    </>
  )
  
}
