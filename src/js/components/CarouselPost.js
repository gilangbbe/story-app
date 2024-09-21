import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { format } from 'date-fns';

class Carousel extends LitWithoutShadowDom {
  static properties = {
    imgPath: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    storyId: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    this.createdAt = format(new Date(this.createdAt), 'd MMMM yyyy');
    return html`
      <div id="${this.storyId}" class="carousel-container">
        <div class="gradient"></div>
        <img src="${this.imgPath}" />
        <div class="overlay-text">
          <p class="name">${this.name}</p>
          <div class="desc-container">
            <p class="description">${this.description}</p>
          </div>
          <p class="date">${this.createdAt}</p>
        </div>
      </div>
      <slot></slot>
    `;
  }
}

customElements.define('carousel-post', Carousel);
