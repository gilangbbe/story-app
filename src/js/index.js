// Import our custom CSS
import '../sass/main.scss';
import './components/index';
import Dashboard from './pages/Dashboard';
import Add from './pages/add';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
