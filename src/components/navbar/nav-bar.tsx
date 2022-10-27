import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './nav-bar.css';

interface INavBarRoute {
  path: string,
  text: string,
}

export function NavBarComponent(): JSX.Element {

  window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler: any = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem: any) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  const baseRoutes: INavBarRoute[] = [
    { text: 'About', path: '#about'},
    { text: 'Portfolio', path: '#portfolio' },
    { text: 'Social', path: '#social'}
  ]

  function routeLinks(): JSX.Element[] {
    let routes = baseRoutes
    return routes.map((route) => <NavLink className='nav-item' key={ route.text } to={ route.path }>{ route.text }</NavLink>)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <Container>
            <a className="navbar-brand" href="#page-top">Leon Hutchinson Media</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                  { routeLinks() }
                </ul>
            </div>
        </Container>
      </nav>
    </>
  )
}
