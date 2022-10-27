import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './nav-bar.css';

interface INavBarRoute {
  path: string,
  text: string,
}

export function NavBarComponent(): JSX.Element {


  const baseRoutes: INavBarRoute[] = [
    { text: 'About', path: '#about'},
    { text: 'Portfolio', path: '#portfolio' },
    { text: 'Social', path: '#social'}
  ]

  function routeLinks(): JSX.Element[] {
    let routes = baseRoutes
    return routes.map((route) => <a className='nav-item' href={route.path} key={ route.text }>{ route.text }</a>)
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
