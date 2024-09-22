import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { format } from 'date-fns';

class CarouselPostCard extends LitWithoutShadowDom {
  static properties = {
    imgPath: { type: String, reflect: true },
    name: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    storyId: { type: String, reflect: true },
    description: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.imgPath = '';
    this.name = '';
    this.createdAt = '';
    this.storyId = '';
    this.description = '';
  }

  render() {
    this.createdAt = format(new Date(this.createdAt), 'd MMMM yyyy');
    return html`
      <div
        class="container-post-card"
        id="${this.storyId}"
        @click=${this._changePost}
      >
        <div class="image-post-card">
          <img src="${this.imgPath}" />
        </div>
        <div class="desc-post-card">
          <p class="name">${this.name}</p>
          <p>${this.createdAt}</p>
        </div>
      </div>
    `;
  }

  async _changePost(event) {
    const carouselPost = document.querySelector('carousel-post');
    carouselPost.setAttribute('imgPath', `${this.imgPath}`);
    carouselPost.setAttribute('name', `${this.name}`);
    carouselPost.setAttribute('storyId', `${this.storyId}`);
    carouselPost.setAttribute('description', `${this.description}`);
    carouselPost.setAttribute('createdAt', `${this.createdAt}`);
    carouselPost.setAttribute('createdAt', `${this.createdAt}`);
  }
}

customElements.define('carousel-post-card', CarouselPostCard);
