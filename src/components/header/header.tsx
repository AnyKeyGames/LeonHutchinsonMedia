import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../../core/css/core.css';
import { CarouselHeader } from './crousel-header';
import './header.css';


export function Header(): JSX.Element {

  const delay = { "--animation-delay": 1 } as React.CSSProperties;
  const delay2 = { "--animation-delay": 1.5 } as React.CSSProperties;
  const delay3 = { "--animation-delay": 3 } as React.CSSProperties;

  return (
    <>
        <header className="masthead" id="page-top">
            <CarouselHeader/>
            <Container>
                <div className="masthead-heading text-uppercase" style={delay}>Leon</div>
                <div className="masthead-heading text-uppercase" style={delay2}>Hutchinson</div>
                <div className="masthead-subheading" style={delay3}>NE Videographer / Phototographer</div>
                <a className="btn btn-primary btn-xl text-uppercase" style={delay3} href="#portfolio">My work</a>
            </Container>

        </header>
    </>
  )
  
}
