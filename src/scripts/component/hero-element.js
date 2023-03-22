// const image = require('../../public/heros/hero-image.jpg');

class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
	<style>
		.hero-element .container .bg {
			overflow: hidden;
			background-size: cover;
		}
		.hero-element .container .bg img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	</style>

    <div class="hero-element">
      <div class="container">
        <div class="bg">
          <img
            src="/../../public/heros/hero-image.jpg"
            alt="Hero Banner"
          />
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
