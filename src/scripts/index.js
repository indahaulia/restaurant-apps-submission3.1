import 'regenerator-runtime'; /* for async await transpile */
// Style CSS
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Customs Elements
import './components/nav-bar.js';
import './components/footer.js';
import './components/hero-element.js';

// JS
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import WebSocketInitiator from './utils/websocket-initiator.js';
import CONFIG from './globals/config.js';

const START = 10;
const NUMBER_OF_IMAGES = 100;

// Drawer Navbar
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
