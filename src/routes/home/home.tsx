import React from 'react';
import { Header } from '../../components/header';
import { About } from '../../components/about/about';

import './home.css';
import '../../core/css/core.css';
import '../../core/css/animations.css';
import { Footer } from '../../components/footer';
import { Social } from '../../components/social';
import { Portfolio } from '../../components/portfolio';
import { Featured } from '../../components/featured';

export function Home(): JSX.Element {
  
  return (
    <>
      {/* <Container fluid className='main-container'> */}
        <div className="App">
          <Header />
          <About />
          <Featured/>
          <Portfolio />
          <Social />
          <Footer />
        </div>
      {/* </Container> */}
    </>
  )
  
}
