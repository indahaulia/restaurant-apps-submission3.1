class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="stylefooter">Copyright © 2022 - Panggon Dahar - Submission Dicoding 1</p>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
