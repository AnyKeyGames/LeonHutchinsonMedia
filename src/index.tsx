import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { reportWebVitals } from './tools/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './components/app/app';

// Just like vue where you choose an ID to start your page from, this gets a dom element to hook into
const hookElement = document.getElementById('root') as HTMLElement;
const root = createRoot(hookElement);

// Tell root to Render our page, App referencing our base component.
root.render(
  <StrictMode>
    {/* The whole app is now contained in one component */}
    {/* get the app component */}
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
