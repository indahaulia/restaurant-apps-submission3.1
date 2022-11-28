class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-text-box">
            <h1>Sugeng Rawuh </h1>
            <h4>Panggon Dahar dengan berbagai macam pilihan</h4>
            <a class="btn btn-full" href="#content">Pilih Restoran</a>
        </div>
      `;
  }
}

customElements.define('hero-bar', HeroElement);
