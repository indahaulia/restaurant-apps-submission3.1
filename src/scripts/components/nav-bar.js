class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button id="menu" class="off-canvas" href="#" aria-label="navigation-menu">☰</button>
      <nav id="drawer" class="nav">
          <div id="wrapperid" class="wrapper">
              <div><img src="./images/logo/brand-logo.png" alt="Logo Panggon Dahar" class="logo-image"></div>
              <div></div>
              <div class="nav-link"><a href="/">Home</a></div>
              <div class="nav-link"><a href="#/favorite">Favorite</a></div>
              <div class="nav-link"><a href="https://www.linkedin.com/in/indah-aulia-andriani-935733178/">About Us</a></div>
          </div>
      </nav>
      `;
  }
}

customElements.define('nav-bar', Navbar);
