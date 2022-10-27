import {
    RouterProvider,
    createBrowserRouter,
    Navigate,
  } from 'react-router-dom';

// Components
import { NavBarComponent } from '../components/navbar';
// Pages
import { Home } from './home';

export class AppRoutes {
  
  // Paths
  public static home: string = '/';
  public static notFound: string = '*';

  private static router = createBrowserRouter(
    [
      {
        path: this.home,
        element: <><NavBarComponent /><Home /></>,
        errorElement: <div>whoops, something went wrong.</div>,
        children: []
      },
      {
        path: this.notFound, // Route not found
        element: <Navigate to={this.home} />, // automatically route to home for now
        errorElement: <div>whoops, something went wrong.</div>
      }
    ]
  );

  public static createAppElement(): JSX.Element {
    return (
      <>
        <RouterProvider router={this.router} />
      </>
    )
  }
}
